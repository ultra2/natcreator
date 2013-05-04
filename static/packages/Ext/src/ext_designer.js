Ext.override(Ext.AbstractComponent, {

    deferredUpdateFrame: false,
    viewNode: null,

    initComponent: function () {
        this.callParent(arguments);

        //if (this.designMode) return;

        this.on('move', this.this_move, this);
        this.on('resize', this.this_resize, this);
        this.on('afterrender', this.this_afterrender, this);
    },

    this_move: function(comp, x, y, op) {
        if (!this.viewNode) return;
//            this.SetConfig('x', x);
//            this.SetConfig('y', y);
    },

    this_resize: function(comp, width, height, oldWidth, oldHeight, op) {
        if (!this.viewNode) return;
//            this.viewNode.SetConfig('width', width);
//            this.viewNode.SetConfig('height', height);
    },

    this_afterrender: function() {
        if (this.deferredUpdateFrame) {
            this.updateFrame();
            this.deferredUpdateFrame = false;
        }
    },

    IsVisible: function(deep) {
        var ownerTabPanel = this.up('tabpanel');
        if (!ownerTabPanel) return this.isVisible(deep);
        var activeTab = ownerTabPanel.getActiveTab();
        return  ((this === activeTab) || (this.isDescendantOf(activeTab)));
    },

    getFramedChildren: function() {
        var result = [];
        if (this.items) {
            result = this.queryBy(function(childComponent) {
                return (!!childComponent.isFocusFramed);
            }, this);
        }
        return result;
    },

    updateFrame: function() {
        if (!this.IsVisible()) {
            this.deferredUpdateFrame = true;
            return;
        }

        if (((this.isFocusFramed) || (this.isSelectFramed)) && (!this.isNatFramed)) {
            var domEl = this.getEl();

            var handleEls = [];
            handleEls.push('<div id="' + domEl.id + '-north-frame" class="viewedit-focus-frame viewedit-focus-frame-north"></div>');
            handleEls.push('<div id="' + domEl.id + '-east-frame" class="viewedit-focus-frame viewedit-focus-frame-east"></div>');
            handleEls.push('<div id="' + domEl.id + '-south-frame" class="viewedit-focus-frame viewedit-focus-frame-south"></div>');
            handleEls.push('<div id="' + domEl.id + '-west-frame" class="viewedit-focus-frame viewedit-focus-frame-west"></div>');

            // From Extjs Resizer.js
            // Position the element, this enables us to absolute position
            // the handles within this.el
            domEl.position();

            Ext.DomHelper.append(domEl, handleEls.join(''));

            this['north-frame'] = domEl.getById(domEl.id + '-north-frame');
            this['east-frame'] = domEl.getById(domEl.id + '-east-frame');
            this['south-frame'] = domEl.getById(domEl.id + '-south-frame');
            this['west-frame'] = domEl.getById(domEl.id + '-west-frame');

            this.isNatFramed = true;
        }
		
		try{
			if (this.isSelectFramed) {
				this['north-frame'].addCls('viewedit-select-frame');
				this['east-frame'].addCls('viewedit-select-frame');
				this['south-frame'].addCls('viewedit-select-frame');
				this['west-frame'].addCls('viewedit-select-frame');
			}
			
			if ((this.isFocusFramed) && (!this.isSelectFramed)) {
				this['north-frame'].removeCls('viewedit-select-frame');
				this['east-frame'].removeCls('viewedit-select-frame');
				this['south-frame'].removeCls('viewedit-select-frame');
				this['west-frame'].removeCls('viewedit-select-frame');
			}
			
			if ((!this.isFocusFramed) && (!this.isSelectFramed) && (this.isNatFramed)) {
				this['north-frame'].remove();
				this['east-frame'].remove();
				this['south-frame'].remove();
				this['west-frame'].remove();
				this.isNatFramed = false;
			}
		}
		catch(e){}
    },

    focusFrame: function() {
        this.isFocusFramed = true;
        this.updateFrame();
    },

    unFocusFrame: function() {
        this.isFocusFramed = false;
        this.updateFrame();
    },

    selectFrame: function() {
        this.isSelectFramed = true;
        this.updateFrame();
    },
    unSelectFrame: function() {
        this.isSelectFramed = false;
        this.updateFrame();
    }
});

Ext.override(Ext.container.Container, {

    getChildByElement: function(el, deep) {
        var item,
            itemEl,
            i = 0,
            it = this.getRefItems(),
            ln = it.length;

        el = Ext.getDom(el);
        for (; i < ln; i++) {
            item = it[i];
            itemEl = item.getEl();
            if (itemEl && ((itemEl.dom === el) || itemEl.contains(el))) {
                if (deep && item.getChildByElement) {
                    return (item.getChildByElement(el, deep)) || item;
                } else {
                    return item;
                }
            }
        }
        return null;
    }
});

Ext.override(Ext.form.field.Base, {

	readOnly: true
});
