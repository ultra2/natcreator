/*
Copyright(c) 2011 Company Name
*/
Ext.apply(Ext, {

	isEqual: function(value1, value2){
		if (value1 === value2) return true;

		if (Ext.isObject(value1) && Ext.isObject(value2)){
			return (Ext.Object.isEqual(value1, value2));
		}

		if (Ext.isDate(value1) && Ext.isDate(value2)){
			return (Ext.Date.isEqual(value1, value2));
		}

		return false;
	}
});
Ext.define('NAT.button.Button', {
    extend: 'Ext.button.Button',
    alias: 'widget.natbutton',

    autoWidth: true,

    initComponent: function () {
        this.callParent(arguments);
    }
});

Ext.define('NAT.tree.plugin.CellEditing', {
    alias: 'plugin.nattreecellediting',
    extend: 'Ext.grid.plugin.CellEditing',

    /**
     * @override
     * @private Collects all information necessary for any subclasses to perform their editing functions.
     * @param record
     * @param columnHeader
     * @returns {Object} The editing context based upon the passed record and column
     */
    getEditingContext: function (record, columnHeader) {
        var me = this,
            grid = me.grid,
            store = grid.store,
            rowIdx,
            colIdx,
            view = grid.getView(),
            root = grid.getRootNode(),
            value;

        // If they'd passed numeric row, column indices, look them up.
        if (Ext.isNumber(record)) {
            rowIdx = record;
            //record = root.getChildAt(rowIdx);
            record = store.tree.flatten()[rowIdx]; //IZS: support for multi deep level
        } else {
            //rowIdx = root.indexOf(record);
            rowIdx = root.indexOfId(record._id); //IZS: support for multi deep level
        }
        if (Ext.isNumber(columnHeader)) {
            colIdx = columnHeader;
            columnHeader = grid.headerCt.getHeaderAtIndex(colIdx);
        } else {
            colIdx = columnHeader.getIndex();
        }

        value = record.get(columnHeader.dataIndex);
        return {
            grid: grid,
            record: record,
            field: columnHeader.dataIndex,
            value: value,
            row: view.getNode(rowIdx),
            column: columnHeader,
            rowIdx: rowIdx,
            colIdx: colIdx
        };
    }
});

Ext.define('NAT.tree.plugin.TreeViewDragDrop', {
	extend: 'Ext.tree.plugin.TreeViewDragDrop',
	alias: 'plugin.nattreeviewdragdrop',

	onViewRender : function(view) {
		var me = this;

		if (me.enableDrag) {
			me.dragZone = new Ext.tree.ViewDragZone({
				view: view,
				ddGroup: me.dragGroup || me.ddGroup,
				dragText: me.dragText,
				repairHighlightColor: me.nodeHighlightColor,
				repairHighlight: me.nodeHighlightOnRepair
			});
		}

		if (me.enableDrop) {
			me.dropZone = new NAT.tree.ViewDropZone({
				view: view,
				ddGroup: me.dropGroup || me.ddGroup,
				allowContainerDrops: me.allowContainerDrops,
				appendOnly: me.appendOnly,
				allowParentInserts: me.allowParentInserts,
				expandDelay: me.expandDelay,
				dropHighlightColor: me.nodeHighlightColor,
				dropHighlight: me.nodeHighlightOnDrop
			});
		}
	}
});

Ext.define('NAT.tree.Panel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.nattree',
    requires: ['NAT.tree.plugin.CellEditing'],

    animate: false,

    constructor: function (config) {
        this.callParent([config]);
        return this;
    },

    initComponent: function () {
//            this.viewConfig = Ext.applyIf(this.viewConfig || {}, {
//                loadMask: false //if true after refreshing the store grid rows cant be selected
//            });

        this.callParent(arguments);

        this.on('select', this.tree_select, this);
        this.on('deselect', this.tree_deselect, this);
    },

    tree_select: function (rowModel, model) {
        if (!this.store) return;
        this.store.Select(model);
    },

    tree_deselect: function (rowModel, model) {
        if (!this.store) return;
        this.store.Deselect();
    },

//    bindStore: function(store) {
//        if (this.IsVisible()) {
//            this.bindStore(store);
//        } else {
//            this.deferredBind = true;
//            this.deferredBindStore = store;
//        }
//    },

    bindStore: function(store) {
        if (!store) return;
        this.store = store;

        var me = this;
        me.mon(me.store, {
            scope: me,
            rootchange: me.onRootChange,
            clear: me.onClear
        });

        me.relayEvents(me.store, [
            'beforeload',
            'load'
        ]);

        me.mon(me.store, {
            append: me.createRelayer('itemappend'),
            remove: me.createRelayer('itemremove'),
            move: me.createRelayer('itemmove', [0, 4]),
            insert: me.createRelayer('iteminsert'),
            beforeappend: me.createRelayer('beforeitemappend'),
            beforeremove: me.createRelayer('beforeitemremove'),
            beforemove: me.createRelayer('beforeitemmove'),
            beforeinsert: me.createRelayer('beforeiteminsert'),
            expand: me.createRelayer('itemexpand', [0, 1]),
            collapse: me.createRelayer('itemcollapse', [0, 1]),
            beforeexpand: me.createRelayer('beforeitemexpand', [0, 1]),
            beforecollapse: me.createRelayer('beforeitemcollapse', [0, 1])
        });

        var root = store.getRootNode();
        if (!root) return;
        this.view.setRootNode(root);
    },

    getSelected: function () {
        var selRecords = this.getSelectionModel().getSelection();
        if (selRecords.length == 0) return null;
        return selRecords[0];
    },

    SelectRoot: function (suppressEvent) {
        this.getSelectionModel().select(this.getRootNode(), false, suppressEvent);
    },

    Select: function (models, keepExisting, suppressEvent) {
        this.getSelectionModel().select(models, keepExisting, suppressEvent);
    },

    getById: function(nodeId) {
        return this.store.getById(nodeId);
    },

    SelectById: function(nodeId) {
        if (!this.store) return;
        var node = this.store.getNodeById(nodeId);
        if (!node) return;
        this.selectPath(node.getPath());
    },

    Deselect: function (models, suppressEvent) {
        this.getSelectionModel().deselect(models, suppressEvent);
    },

    startEdit: function(model, column) {
		var plugin = this.getPlugin();
		if (!plugin) return;

		if (!model){
			model = this.getSelected();
		}
		else if (Ext.isString(model)) {
			model = this.store.getNodeById(model);
		}
		if (!model) return;

		if (model != this.getSelected()){
			this.selectPath(model.getPath());
		}

		if (!column){
			column = this.headerCt.child(0);
		}
		else if (Ext.isString(column)) {
			column = this.headerCt.child(column);
		}
        if (!column) return;

        plugin.startEdit(model, column);
    }
});

Ext.define('NAT.tree.ViewDropZone', {
	extend: 'Ext.tree.ViewDropZone',

	onNodeOver : function(node, dragZone, e, data) {
		var position = this.getPosition(e, node),
			returnCls = this.dropNotAllowed,
			view = this.view,
			targetNode = view.getRecord(node),
			indicator = this.getIndicator(),
			indicatorX = 0,
			indicatorY = 0;

		// auto node expand check
		this.cancelExpand();
		if (position == 'append' && !this.expandProcId && !Ext.Array.contains(data.records, targetNode) && !targetNode.isLeaf() && !targetNode.isExpanded()) {
			this.queueExpand(targetNode);
		}

		if (this.isValidDropPoint(node, position, dragZone, e, data)){
			this.valid = true;
			this.currentPosition = position;
			this.overRecord = targetNode;

			indicator.setWidth(Ext.fly(node).getWidth());
			indicatorY = Ext.fly(node).getY() - Ext.fly(view.el).getY() - 1;

			/*
			 * In the code below we show the proxy again. The reason for doing this is showing the indicator will
			 * call toFront, causing it to get a new z-index which can sometimes push the proxy behind it. We always
			 * want the proxy to be above, so calling show on the proxy will call toFront and bring it forward.
			 */
			if (position == 'before') {
				returnCls = targetNode.isFirst() ? Ext.baseCSSPrefix + 'tree-drop-ok-above' : Ext.baseCSSPrefix + 'tree-drop-ok-between';
				indicator.showAt(0, indicatorY);
				dragZone.proxy.show();
			} else if (position == 'after') {
				returnCls = targetNode.isLast() ? Ext.baseCSSPrefix + 'tree-drop-ok-below' : Ext.baseCSSPrefix + 'tree-drop-ok-between';
				indicatorY += Ext.fly(node).getHeight();
				indicator.showAt(0, indicatorY);
				dragZone.proxy.show();
			} else {
				returnCls = Ext.baseCSSPrefix + 'tree-drop-ok-append';
				// @TODO: set a class on the parent folder node to be able to style it
				indicator.hide();
			}

			//IZS: begin
			//check here bc we need indicator showed even if validatedrop returns false
			if (!this.validatedrop(node, data, targetNode, position)){
				this.valid = false;
				returnCls = this.dropNotAllowed;
			}
			//IZS: end
		} else {
			this.valid = false;
		}

		this.currentCls = returnCls;
		return returnCls;
	},

	onContainerOver : function(dd, e, data) {
		if (!this.allowContainerDrops){
			return e.getTarget('.' + this.indicatorCls) ? this.currentCls : this.dropNotAllowed;
		}

		var returnCls = this.dropNotAllowed,
			view = this.view,
			indicator = this.getIndicator();

		this.currentPosition = null;
		this.overRecord = null;
		indicator.hide();

		if (!this.validatedrop(null, data, null, null)){
			this.valid = false;
			returnCls = this.dropNotAllowed;
		}
		else{
			this.valid = true;
			returnCls = Ext.baseCSSPrefix + 'tree-drop-ok-append';
		}

		return returnCls;
	},

//	onContainerDrop : function(dd, e, data) {
//		return true;
//	},

	validatedrop: function(node, data, overModel, dropPosition){
		return this.fireViewEvent('validatedrop', node, data, overModel, dropPosition);
	}
});

Ext.define('NAT.edit.Source', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.natsourceedit',

    layout: 'fit',
    border: false,
    isFormField: true,

    propertyPath: '',
    parser: 'javascript',
    readOnly: false,
    firstRowReadonly: false,
    lastRowReadonly: false,

    path: '',
    sourceCode: '',
    fontSize: '18px',
    theme: 'textmate',
    printMargin: false,
    highlightActiveLine: true,
    tabSize: 4,
    useSoftTabs: false,
    showInvisible: false,
    useWrapMode: false,

//EDITOR BEGIN
    initEditor: function()
    {
        var me = this;

        me.editor = ace.edit(me.editorId);
        me.setMode(me.parser);
        me.setTheme(me.theme);
        me.editor.getSession().setUseWrapMode(me.useWrapMode);
        me.editor.setShowInvisibles(me.showInvisible);
        me.setFontSize(me.fontSize);
        me.editor.setShowPrintMargin(me.printMargin);
        me.editor.setHighlightActiveLine(me.highlightActiveLine);
        me.getSession().setTabSize(me.tabSize);
        me.getSession().setUseSoftTabs(me.useSoftTabs);
        me.setValue(me.sourceCode);
        me.editor.setReadOnly(me.readOnly);

        me.editor.container.addEventListener("keydown", function(e){
            var readOnly = me.readOnly;
            var length = me.getLength();
            var position = me.editor.getCursorPosition();
            if ((me.firstRowReadonly) && (position.row == 0)) readOnly = true;
            if ((me.lastRowReadonly) && (position.row == length-1)) readOnly = true;
            me.editor.setReadOnly(readOnly);
        }, true);

        me.editor.getSession().on('change', function(){
            if (me.readOnly === true) return;
            me.fireEvent('change', me, me.getValue());
        }, me);

        me.editor.focus();
    },

    getEditor: function(){
        return this.editor;
    },

    getSession: function(){
        return this.editor.getSession();
    },

    getTheme: function(){
        return this.editor.getTheme();
    },

    getLength: function(){
        return this.editor.getSession().getLength();
    },

    getAllLines: function(){
        return this.editor.getSession().getLines(0,this.getLength());
    },

    setTheme: function(name){
        // require("theme-" + name + ".js");
        this.editor.setTheme("ace/theme/" + name);
    },

    setMode: function(mode){
        //var Mode = require("ace/mode/" + mode).Mode;
        this.getSession().setMode("ace/mode/" + mode);
    },

    getValue: function(){
        if (!this.editor) return;
        return this.editor.getSession().getValue();
    },

    setValue: function(value){
        if (Ext.isArray(value)) {
            value = { array: value };
        }
        if (Ext.isObject(value)) {
            try {
                value = JSON.stringify(value, null, '\t');
            }
            catch(err){
                alert('Incorrect config ' + this.get('name') + " \n error: " + err);
                return;
            }
        }
//            if (Ext.isObject(value)) {
//                value = QuotelessJSON.stringify(value, null, '\t');
//            }

        if (!this.editor) {
            this.sourceCode = value;
            return;
        }
        this.editor.getSession().setValue(value);
    },

    setFontSize: function(value){
        this.editor.setFontSize(value);
    },

    setReadOnly: function(value){
        if (!this.editor) {
            this.readOnly = value;
            return;
        }
        this.editor.setReadOnly(value);
    },

    undo: function(){
        this.editor.undo();
    },

    redo: function(){
        this.editor.redo();
    },
//EDITOR END

    listeners: {

        resize: function()
        {
            if(this.editor)
            {
                this.editor.resize();
            }
        },

        activate: function()
        {
            if(this.editor)
            {
                this.setValue(this.getValue());
                this.editor.focus();
            }
        }
    },

    initComponent: function()
    {
        var me = this,
            items = {
                xtype: 'component',
                autoEl: 'pre'
            };

        me.addEvents(
            /**
             * @event change Fires after a change.
             * @param {Ext.ux.aceeditor.Editor} this
             */
            'change');

        if(me.contentEl != null)
        {
            me.sourceCode = Ext.get(me.contentEl).dom.innerHTML;
        }

        Ext.apply(me, {
            items: items
        });

        me.callParent(arguments);
    },

    onRender: function()
    {
        var me = this;

        if(me.contentEl != null)
        {
            me.sourceCode = Ext.get(me.contentEl).dom.innerHTML;
        }

        me.editorId = me.items.keys[0];
        me.oldSourceCode = me.sourceCode;
        me.callParent(arguments);

        // init editor on afterlayout
        me.on('afterlayout', function()
        {

            if(me.url)
            {
                Ext.Ajax.request({
                    url: me.url,
                    success: function(response)
                    {
                        me.sourceCode = response.responseText;
                        me.initEditor();
                    }
                });
            }
            else
            {
                me.initEditor();
            }
        }, me, {
            single: true
        });
    },

    //IZS BEGIN
    isValid : function() {
        return true;
    },

    isDirty: function() {
        return false;
    }
    //IZS END
});

Ext.define('NAT.edit.StringArray', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.natstringarrayedit',

    mixins: {
        bindable: 'Ext.util.Bindable',
        field: 'Ext.form.field.Field'
    },

    requires: ['Ext.panel.Panel', 'Ext.view.BoundList', 'Ext.layout.container.Fit'],

    uses: ['Ext.view.DragZone', 'Ext.view.DropZone'],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    propertyPath: '',
    itemRenderer: null,

    valueField: 'id',
    displayField: 'name',

    ddReorder: false,
    appendOnly: false,
    allowBlank: true,
    ignoreSelectChange: 0,

    constructor : function(config) {
        this.store = Ext.create('Ext.data.ArrayStore', {
            fields: ['id', 'name'],
            data: []
        });
        this.callParent([config]);
    },

    initComponent: function(){
        var me = this;

        me.bindStore(me.store, true);

        me.items = [
            {
                xtype: 'container',
                dock: 'top',
                cls: 'commandbar',
                defaults: {
                    margins: 2
                },
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        xtype: 'combobox',
                        itemId: 'cbAvailableTypes',
                        editable: false,
                        flex: 1,
                        valueField: 'id',
                        displayField: 'name'
                    },
                    {
                        xtype: 'natbutton',
                        itemId: 'btnAddType',
                        icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
                        tooltip: 'Add type'
                    },
                    {
                        xtype: 'natbutton',
                        itemId: 'btnRemoveType',
                        icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
                        tooltip: 'Remove type'
                    }
                ]
            },
            {
                xtype: 'boundlist',
                itemId: 'blItems',
                flex: 1,
                deferInitialRefresh: false,
                border: 1,
                multiSelect: false,
                store: me.store,
                displayField: me.displayField,
                disabled: me.disabled
            }
        ];

        me.callParent();
        me.initField();
        me.addEvents('drop');

        me.down('#cbAvailableTypes').on('select', this.cbAvailableTypes_select, this);
        me.down('#blItems').on('select', this.blItems_select, this);
        me.down('#btnAddType').on('click', this.btnAddType_click, this);
        me.down('#btnRemoveType').on('click', this.btnRemoveType_click, this);
    },

    setItemsStore: function(store){
        this.itemsStore = store;
    },

    setComboStore: function(store){
        this.down('#cbAvailableTypes').bindStore(store);
    },

    cbAvailableTypes_select: function(){
        this.RefreshUI();
    },

    blItems_select: function(selModel, selections){
        this.RefreshUI();
    },

    btnAddType_click: function(){
        var selectedInCombo = this.down('#cbAvailableTypes').getValue();
        var v = this.getValue();
        var newValue = Ext.Array.clone(v);
        newValue.push(selectedInCombo);
        this.setValue(newValue);
        this.fireEvent('itemchanged', newValue);
    },

    btnRemoveType_click: function(){
        var selected = this.getSelected();
        var v = this.getValue();
        var newValue = Ext.Array.clone(v);
        Ext.Array.remove(newValue, selected.getId());
        this.setValue(newValue);
        this.fireEvent('itemchanged', newValue);
    },

    getSelected: function(){
        var selection = this.down('#blItems').getSelectionModel().getSelection();
        return (selection) ? selection[0] : null;
    },

    // compare array values
    isEqual: function(v1, v2) {
        var fromArray = Ext.Array.from,
            i = 0,
            len;

        v1 = fromArray(v1);
        v2 = fromArray(v2);
        len = v1.length;

        if (len !== v2.length) {
            return false;
        }

        for(; i < len; i++) {
            if (v2[i] !== v1[i]) {
                return false;
            }
        }

        return true;
    },

    afterRender: function(){
        var me = this,
            records;

        me.callParent();

        if (me.ddReorder && !me.dragGroup && !me.dropGroup){
            me.dragGroup = me.dropGroup = 'MultiselectDD-' + Ext.id();
        }

        if (me.draggable || me.dragGroup){
            me.dragZone = Ext.create('Ext.view.DragZone', {
                view: me.boundList,
                ddGroup: me.dragGroup,
                dragText: '{0} Item{1}'
            });
        }
        if (me.droppable || me.dropGroup){
            me.dropZone = Ext.create('Ext.view.DropZone', {
                view: me.boundList,
                ddGroup: me.dropGroup,
                handleNodeDrop: function(data, dropRecord, position) {
                    var view = this.view,
                        store = view.getStore(),
                        records = data.records,
                        index;

                    // remove the Models from the source Store
                    data.view.store.remove(records);

                    index = store.indexOf(dropRecord);
                    if (position === 'after') {
                        index++;
                    }
                    store.insert(index, records);
                    view.getSelectionModel().select(records);
                    me.fireEvent('drop', me, records);
                }
            });
        }
    },

    isValid : function() {
        var me = this,
            disabled = me.disabled,
            validate = me.forceValidation || !disabled;


        return validate ? me.validateValue(me.value) : disabled;
    },

    validateValue: function(value) {
        var me = this,
            errors = me.getErrors(value),
            isValid = Ext.isEmpty(errors);

        if (!me.preventMark) {
            if (isValid) {
                me.clearInvalid();
            } else {
                me.markInvalid(errors);
            }
        }

        return isValid;
    },

    markInvalid : function(errors) {
        // Save the message and fire the 'invalid' event
        var me = this,
            oldMsg = me.getActiveError();
        me.setActiveErrors(Ext.Array.from(errors));
        if (oldMsg !== me.getActiveError()) {
            me.updateLayout();
        }
    },

    clearInvalid : function() {
        // Clear the message and fire the 'valid' event
        var me = this,
            hadError = me.hasActiveError();
        me.unsetActiveError();
        if (hadError) {
            me.updateLayout();
        }
    },

    getValue: function(){
        return this.value || [];
    },

    setValue: function(value){
        this.mixins.field.setValue.call(this, value);
        this.updateItems();
    },

    updateItems: function(){
        this.store.removeAll();
        if (Ext.isArray(this.value)){
            for (var i=0; this.value.length > i; i++){
                this.store.add({
                    id: this.value[i],
                    name: (this.itemRenderer) ? this.itemRenderer(this.value[i]) : this.value[i]
                })
            }
        }
    },

    clearValue: function(){
        this.setValue([]);
    },

    onEnable: function(){
        var list = this.boundList;
        this.callParent();
        if (list) {
            list.enable();
        }
    },

    onDisable: function(){
        var list = this.boundList;
        this.callParent();
        if (list) {
            list.disable();
        }
    },

    getErrors : function(value) {
        return [];
    },

    onDestroy: function(){
        var me = this;

        me.bindStore(null);
        Ext.destroy(me.dragZone, me.dropZone);
        me.callParent();
    },

    onBindStore: function(store){
        var boundList = this.boundList;

        if (boundList) {
            boundList.bindStore(store);
        }
    },

    RefreshUI: function () {
        var selectedInCombo = this.down('#cbAvailableTypes').getValue();
        var selected = this.getSelected();
        this.down('#btnAddType').setDisabled(!selectedInCombo);
        this.down('#btnRemoveType').setDisabled(!selected);
    }
});
Ext.define('NAT.form.field.Checkbox', {
    extend: 'Ext.form.field.Checkbox',
    alias: 'widget.natcheckboxfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.ComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.natcombobox',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    valueField: 'id',
    displayField: 'name',

    editable: false,
    selectOnFocus: true,
    typeAhead: true,
    emptyText: 'Please choose!',
    triggerAction: 'none',
    matchFieldWidth: true,
    queryMode: 'local',
    listConfig: {
        loadMask: false, //a loadmask nem tunik el, a masodik store load utan!
        width: 400 //for multicolumn combo, set matchFieldWidth to false!
    },

    constructor : function(config) {
        this.store = Ext.create('Ext.data.ArrayStore', {
            fields: ['id', 'name'],
            data: []
        });
        if (config.comboData){
            this.setComboData(config.comboData);
        }
        this.callParent([config]);
    },

    initComponent: function () {
        this.callParent(arguments);
        this.on('beforequery', this.this_beforequery, this);
    },

    setComboData: function(value){
        this.store.removeAll();

        var data = [], id, name;

        if (Ext.isArray(value[0])){    //if value format is two dimensional [[1,1],[2,2]]...
            data = value;
        }
        else{
            for (var i=0; value.length > i; i++){
                id = value[i];
                name = value[i];
                try { id = JSON.parse(id); } catch(err){}
                data.push([id, name]);
            }
        }

        this.store.add(data);
        this.store.sort('name');
    },

    renderer: function(value, rec){
        if (!this.store) return value;
        var lookupModel = this.store.getById(value);
        if (!lookupModel) return value;
        return lookupModel.get(this.displayField);
    },

    this_beforequery: function() {
        this.expand();
        return false;  //prevent clearFilter() on store, cause we have '_deleted = false' filter
                       //todo: override combobox's doQuery function to preserve our filter
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Date', {
    extend: 'Ext.form.field.Date',
    alias: 'widget.natdatefield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Display', {
    extend: 'Ext.form.field.Display',
    alias: 'widget.natdisplayfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.File', {
    extend: 'Ext.form.field.File',
    alias: 'widget.natfilefield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Function', {
    extend:'Ext.form.field.Trigger',
    alias: 'widget.natfunctionfield',
    requires: [
        'NAT.edit.Source'
    ],

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    editable: false,

    functionName: '',
    functionParams: [],

    editorWindow: null,

    initComponent: function () {
        this.callParent(arguments);
    },

    onTriggerClick: function() {
        this.editorWindow = this.createEditor();
        this.editorWindow.show(null, function(a,b){
            this.onExpand();
        }, this);
        this.editorWindow.center();
    },

    //Sets the sourceedit's value to match the current field value when expanding.
    onExpand: function() {
        var oFunction = this.getValue();
        var sourceedit = this.editorWindow.down('#sourceedit');

        if (oFunction){
            var params = oFunction.params;
            var body = oFunction.body;
        }else{
            params = this.functionParams;
            body = '{\n\n}';
        }

        var value = 'function ' + this.functionName + '(';
        if (params){
            for (var i=0; params.length>i; i++){
                value += params[i];
                if (i < params.length-1) value += ', ';
            }
        }
        value += ')\n';
        value += Ext.Array.convertToString(body, '\n');

        sourceedit.setValue(value);
        sourceedit.focus(false, 1);
    },

    createEditor: function() {
        var me = this;

        return Ext.create('widget.natwindow', {
            title: 'Function Editor',
            modal: true,
            height: 700,
            width: 1400,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'natsourceedit',
                    itemId: 'sourceedit',
                    grow: true,
                    fieldStyle: 'border: none; background-image: none;',
                    firstRowReadonly: true,
                    lastRowReadonly: true,
                    flex: 1
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        padding: '5',
                        pack: 'end',
                        align: 'middle'
                    },
                    defaults: {
                        margins: '0 0 0 5',
                        minWidth: 100
                    },
                    cls: 'commandpanel',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'natbutton',
                            itemId: 'btnOk',
                            text: 'Ok',
                            ui: 'green',
                            listeners: {
                                scope: me,
                                click: me.btnOk_click
                            }
                        },
                        {
                            xtype: 'natbutton',
                            itemId: 'btnCancel',
                            text: 'Cancel',
                            listeners: {
                                scope: me,
                                click: me.btnCancel_click
                            }
                        }
                    ]
                }
            ]
        });
    },

    //Sets the current field value and collapse.
    btnOk_click: function(m, d) {
        var sourceedit = this.editorWindow.down('#sourceedit');
        var lines = sourceedit.getAllLines();

        Ext.Array.erase(lines, 0, 1);

        var value = Ext.Array.convertToString(lines);
        value = Ext.String.removeFromStart(value, '{');
        value = Ext.String.removeFromEnd(value, '}');
        value = value.replace(/\s/g, ''); //remove whitespaces

        if (value){
            value = {
                params: this.functionParams,
                body: lines
            };
        }else{
            value = null
        }

        this.setValue(value);
        this.editorWindow.close();
        this.focus(false, 60);
        this.fireEvent('collapse', this);
    },

    btnCancel_click: function() {
        this.editorWindow.close();
        this.focus(false, 60);
        this.fireEvent('collapse', this);
    },

    rawToValue: function(rawValue) {
        if (rawValue == 'Function...'){
            rawValue = null;
        }
        return rawValue;
    },

    valueToRaw: function(value) {
        return value;
    },

    getRawValue: function() {
        return this.rawValue;
    },

    setRawValue: function(value) {
        var me = this;
       /// value = Ext.value(me.transformRawValue(value), '');
        me.rawValue = value;

        if (me.inputEl) {
            me.inputEl.dom.value = 'Function...';
        }
        return value;
    },

    isValid : function() {
        return true;
    },

    //overidden from Ext.form.field.Text
    isEqual: function(value1, value2) {
        return Ext.isEqual(value1, value2);
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Hidden', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.nathiddenfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.HtmlEditor', {
    extend: 'Ext.form.field.HtmlEditor',
    alias: 'widget.htmleditor',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Lookup', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.natlookupfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    valueField: '_id',
    displayField: 'name',

    editable: false,
    selectOnFocus: true,
    typeAhead: true,
    emptyText: 'Please choose!',
    triggerAction: 'none',
    matchFieldWidth: true,
    queryMode: 'local',
    listConfig: {
        loadMask: false, //a loadmask nem tunik el, a masodik store load utan!
        width: 400 //for multicolumn combo, set matchFieldWidth to false!
    },

    initComponent: function () {
		if (this.designMode){
			this.store = null;
		}

        this.callParent(arguments);

		if (this.designMode) return;

        this.on('beforequery', this.this_beforequery, this);
    },

    this_beforequery: function() {
       this.expand();
       return false;  //prevent clearFilter() on store, cause we have '_deleted = false' filter
                      //todo: override combobox's doQuery function to preserve our filter
    },

    renderer: function(value, rec){
        if (!this.store) return value;
        var lookupModel = this.store.getById(value);
        if (!lookupModel) return value;
        return lookupModel.get(this.displayField);
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Number', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.natnumberfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Object', {
    extend:'Ext.form.field.Trigger',
    alias: 'widget.natobjectfield',
    requires: [
        'NAT.edit.Source'
    ],

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    editable: false,

    functionName: '',
    functionParams: [],

    editorWindow: null,

    initComponent: function () {
        this.callParent(arguments);
    },

    onTriggerClick: function() {
        this.editorWindow = this.createEditor();
        this.editorWindow.show(null, function(a,b){
            this.onExpand();
        }, this);
        this.editorWindow.center();
    },

    //Sets the sourceedit's value to match the current field value when expanding.
    onExpand: function() {
        var lines = this.getValue();
        var sourceedit = this.editorWindow.down('#sourceedit');

        var value = Ext.Array.convertToString(lines, '\n');
        if (!value){
            value = '{\n\n}';
        }

        sourceedit.setValue(value);
        sourceedit.focus(false, 1);
    },

    createEditor: function() {
        var me = this;

        return Ext.create('widget.natwindow', {
            title: 'Object Editor',
            modal: true,
            height: 600,
            width: 800,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'natsourceedit',
                    itemId: 'sourceedit',
                    parser: 'text',
                    grow: true,
                    fieldStyle: 'border: none; background-image: none;',
                    firstRowReadonly: false,
                    lastRowReadonly: false,
                    flex: 1
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        padding: '5',
                        pack: 'end',
                        align: 'middle'
                    },
                    defaults: {
                        margins: '0 0 0 5',
                        minWidth: 100
                    },
                    cls: 'commandpanel',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'natbutton',
                            itemId: 'btnOk',
                            text: 'Ok',
                            ui: 'green',
                            listeners: {
                                scope: me,
                                click: me.btnOk_click
                            }
                        },
                        {
                            xtype: 'natbutton',
                            itemId: 'btnCancel',
                            text: 'Cancel',
                            listeners: {
                                scope: me,
                                click: me.btnCancel_click
                            }
                        }
                    ]
                }
            ]
        });
    },

    //Sets the current field value and collapse.
    btnOk_click: function(m, d) {
        var sourceedit = this.editorWindow.down('#sourceedit');
        var lines = sourceedit.getAllLines();

        this.setValue(lines);
        this.editorWindow.close();
        this.focus(false, 60);
        this.fireEvent('collapse', this);
    },

    btnCancel_click: function() {
        this.editorWindow.close();
        this.focus(false, 60);
        this.fireEvent('collapse', this);
    },

    rawToValue: function(rawValue) {
        if (rawValue == 'Object...'){
            rawValue = null;
        }
        return rawValue;
    },

    valueToRaw: function(value) {
        return value;
    },

    getRawValue: function() {
        return this.rawValue;
    },

    setRawValue: function(value) {
        var me = this;
        /// value = Ext.value(me.transformRawValue(value), '');
        me.rawValue = value;

        if (me.inputEl) {
            me.inputEl.dom.value = 'Object...';
        }
        return value;
    },

    isValid : function() {
        return true;
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Radio', {
    extend: 'Ext.form.field.Radio',
    alias: 'widget.natradiofield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',
    propertyValue: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

    Ext.define('NAT.form.field.StringArray', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.natstringarrayfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    getValue: function(){
        var value = this.callParent(arguments);
        if (value){
            return value.split(',');
        }else{
            return [];
        }
    },

    setValue: function(value){
        value = value || [];
        var result = '';
        for (var i=0; value.length > i; i++){
            result += value[i];
            if (value.length > i) result += ',';
        }
        this.callParent([result]);
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.StringArrayPicker', {
    extend:'Ext.form.field.Picker',
    alias: 'widget.natstringarraypickerfield',
    requires: [
        'Ext.form.field.TextArea'
    ],

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    editable: false,
    matchFieldWidth: false,

    initComponent: function () {
        this.callParent(arguments);
    },

    createPicker: function() {
        var me = this;

        return Ext.create('Ext.container.Container', {
            renderTo: document.body,
            floating: true,
            hidden: true,
            height: 400,
            width: 600,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textarea',
                    itemId: 'textarea',
                    grow: true,
                    fieldStyle: 'border: none; background-image: none;',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'btnOk',
                    text: 'ok',
                    dock: 'bottom',
                    listeners: {
                        scope: me,
                        click: me.btnOk_click
                    }
                }
            ],
            style: { background: 'white' }
        });
    },

    /**
     * @private
     * Sets the current field value and collapse.
     */
    btnOk_click: function(m, d) {
        var textarea = this.picker.down('#textarea');
        var value = textarea.getValue();
        this.setRawValue(value);
        this.collapse();
    },

    /**
     * @private
     * Sets the textarea's value to match the current field value when expanding.
     */
    onExpand: function() {
        var rawValue = this.getRawValue();
        var textarea = this.picker.down('#textarea');
        textarea.setValue(rawValue);
        textarea.focus(false, 1);
    },

    /**
     * @private
     * Focuses the field when collapsing the Date picker.
     */
    onCollapse: function() {
        this.focus(false, 60);
    },

    rawToValue: function(rawValue) {
        return rawValue.split('\n');
    },

    valueToRaw: function(value) {
        if (!Ext.isArray(value)) return '';
        var rawValue = '';
        for (var i=0; value.length > i; i++){
            rawValue += value[i];
            if (value.length-1 > i) rawValue += '\n';
        }
        return rawValue;
    },

    getRawValue: function() {
        return this.rawValue;
    },

    setRawValue: function(value) {
        var me = this;
        /// value = Ext.value(me.transformRawValue(value), '');
        me.rawValue = value;

        if (me.inputEl) {
            me.inputEl.dom.value = 'String Array...';
        }
        return value;
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Text', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.nattextfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.TextArea', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.nattextarea',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    initComponent: function () {
        this.callParent(arguments);
    },

    Write: function(line) {
        var  value = this.getValue();
        this.setValue(value + line);
    },

    Writeln: function(line) {
        var  value = this.getValue();
        this.setValue(value + line + ' \n');
    },

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Time', {
    extend: 'Ext.form.field.Time',
    alias: 'widget.nattimefield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.field.Trigger', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.nattriggerfield',

    validateOnChange: false,
    validateOnBlur: false,
    msgTarget: 'side',

    propertyPath: '',

    hasErrors: function() {
        return ((this.activeErrors) && (this.activeErrors.length > 0));
    }
});

Ext.define('NAT.form.Panel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.natform',

    store: null,		//current store
	dataStore: null,
	dataMember: null,

    children: [],

    isChanging: false,

    initComponent: function () {

		this.dataStore = this.store;
		this.store = null;

		this.callParent(arguments);

		if (this.designMode) return;

		this.UpdateChildren();
		this.on('afterrender', this.this_afterRender, this, {single: true});
    },

	this_afterRender: function(){
		var dataStore = this.dataStore;
		this.dataStore = null;
		this.bindStore(dataStore, this.dataMember);
	},

	bindStore: function(dataStore, dataMember) {
		if (dataStore == this.dataStore && dataMember == dataMember) return;

		if (this.dataStore && this.dataMember) {
			this.dataStore.un('currentmodelchanged', this.dataStore_currentmodelchanged, this);
		}

		this.dataStore = dataStore;
		this.dataMember = dataMember;

		if (Ext.isString(this.dataStore)){
			//local store?
			var natpanel = this.up('natpanel');
			if (natpanel){
				this.dataStore = natpanel.stores.getByKey(this.dataStore);
			}
			//global store?
			if (!this.dataStore){
				this.dataStore = Ext.data.StoreManager.lookup(this.dataStore);
			}
		}

		if (this.dataStore && this.dataMember) {
			this.dataStore.on('currentmodelchanged', this.dataStore_currentmodelchanged, this);
		}

		if (this.dataStore && !this.dataMember) {
			this.store = this.dataStore;
			this.InitBinding();
		}
	},

	dataStore_currentmodelchanged: function(currModel){
		this.store =  (currModel) ? currModel['hasMany_' + this.dataMember] : Ext.data.StoreManager.lookup('ext-empty-store');
		this.InitBinding();
	},

    UpdateChildren: function() {
        this.children = [];
        this.UpdateChildren_req(this);
    },

    UpdateChildren_req: function(container) {
        if (!container.items) return;

        for (var i = 0; container.items.getCount() > i; i++) {
            var item = container.items.getAt(i);
            if (item.isFormField) this.children.push(item);
            else if (item.$className === 'NAT.form.Panel') this.children.push(item);
            else if (item.$className === 'NAT.grid.Panel') this.children.push(item);
            else if (item.$className === 'NAT.tree.Panel') this.children.push(item);
            else this.UpdateChildren_req(item);
        }
    },

    InitBinding: function () {
        if (!this.store) return;

        this.mon(this.store, 'currentmodelchanged', function(model) {
            this.ReadAllValue();
        }, this);

        this.mon(this.store, 'update', function(store, model, operation, modifiedFieldNames) {
            //not embedded model?
            //no modifiedFieldNames on commit operation...
            if (model == this.store.currModel && modifiedFieldNames && modifiedFieldNames.length>0) {
                this.ReadValue(modifiedFieldNames[0], model.get(modifiedFieldNames[0]));
            }
        }, this);

        for (var i = 0; this.children.length > i; i++) {
            var child = this.children[i];
            if (child.isFormField) {
                child.on('change', this.WriteValue, this);
//                child.on('getErrors', this.field_getErrors, this);
                child.on('blur', this.field_blur, this);
            }
        }

        this.ReadAllValue();
    },

    field_blur: function(field, op) {
        if (field.validateOnBlur || field.validateOnChange) return; //UI validation

        if (!this.store) return;
        if (!this.store.hasModel()) return;

        this.store.currModel.ValidateField(field.propertyPath, function(err, data) {
            if (field.preventMark) return;
            var fieldErrors = this.store.currModel.errors.getByField(field.propertyPath);
            var isValid = (fieldErrors.length == 0);
            if (isValid) {
                field.clearInvalid();
            } else {
                field.markInvalid(fieldErrors[0].message);
            }
        }, this);
    },

    ValidateEditorFields: function(op, callback, scope) {
        op = op || {};

        if (!this.store) return;
        if (!this.store.hasModel()) return;

        this.store.currModel.errors.removeAll();

        var me = this;
        async.forEach(this.GetChildFields(), function(field, done){
            me.store.currModel.ValidateField(field.propertyPath, function(err, data) {
                done(null, null);
            }, me);
        },
        function(err, data) {
            me.ShowErrors();
            if (me.store.currModel.errors.isValid()) {
                Ext.callback(callback, scope, [null, null], 0);
            }
            else {
                if (!op.skipFocusFirstInvalidField) me.FocusFirstInvalidField();
                Ext.callback(callback, scope, [me.store.currModel.errors, null], 0);
            }
        });
    },

    ValidateEditor: function(op, callback, scope) {
        op = op || {};

        if (!this.store) return;
        if (!this.store.hasModel()) return;

        this.store.currModel.errors.removeAll();

        var me = this;
        this.store.currModel.ValidateModel(null, function(err, data) {
            me.ShowErrors();
            if (me.store.currModel.errors.isValid()) {
                Ext.callback(callback, scope, [null, null], 0);
            }
            else {
                if (!op.skipFocusFirstInvalidField) me.FocusFirstInvalidField();
                Ext.callback(callback, scope, [me.store.currModel.errors, null], 0);
            }
        }, this);
    },

    ShowErrors: function() {
        if (!this.store) return;
        if (!this.store.hasModel()) return;

        var childFields = this.GetChildFields();
        for (var i = 0; childFields.length > i; i++) {
            var field = childFields[i];
            if (field.preventMark) continue;
            var fieldErrors = this.store.currModel.errors.getByField(field.propertyPath);
            var isValid = (fieldErrors.length == 0);
            if (isValid) {
                field.clearInvalid();
            } else {
                field.markInvalid(fieldErrors[0].message);
            }
        }
    },

    GetChildFields: function() {
        return Ext.Array.filter(this.children, function(child) {
            return child.isFormField;
        });
    },

//    field_getErrors: function(field, value, errors) {
//        if (!this.store) return;
//        if (!this.store.hasModel()) return;
//
//        this.store.model.ValidateField(field.propertyPath, errors);
//    },

    ReadAllValue: function () {
        if (this.isChanging) return;
        if (!this.store) return;
        if (!this.store.hasModel()) return;

        for (var i = 0; this.children.length > i; i++) {
            var child = this.children[i];
            if (!child.propertyPath) continue;
            if ((child.isFormField) && (child.$className === 'NAT.form.field.Radio')) {
                var value = this.store.currModel.get(child.propertyPath);
                this.isChanging = true;
                child.setValue(child.propertyValue === value);
                this.isChanging = false;
                continue;
            }
            if (child.isFormField) {
                this.isChanging = true;
                child.setValue(this.store.currModel.get(child.propertyPath));
                this.isChanging = false;
                continue;
            }
            if (typeof child.bindStore == 'function'){
                child.bindStore(this.store.currModel[child.propertyPath]);
            }
        }
    },

    ReadValue: function (fieldName, value) {
        if (this.isChanging) return;

        for (var i = 0; this.children.length > i; i++) {
            var child = this.children[i];
            if (child.propertyPath == fieldName) {
                if ((child.isFormField) && (child.$className === 'NAT.form.field.Radio')) {
                    this.isChanging = true;
                    child.setValue(child.propertyValue === value);
                    this.isChanging = false;
                    continue;
                }
                if (child.isFormField) {
                    this.isChanging = true;
                    child.setValue(value);
                    this.isChanging = false;
                }
            }
        }
    },

    WriteValue: function (field, newValue, oldValue, op) {
        if (this.isChanging) return;
        if (!this.store) return;
        if (!this.store.hasModel()) return;

        if (field.$className === 'NAT.form.field.Radio') {
            this.isChanging = true;
            this.store.currModel.set(field.propertyPath, field.propertyValue);
            this.isChanging = false;
            this.ReadAllRadioValue();
            return;
        }

        this.isChanging = true;
        this.store.currModel.set(field.propertyPath, newValue);
        this.isChanging = false;
    },

    ReadAllRadioValue: function () {
        if (this.isChanging) return;
        if (!this.store) return;
        if (!this.store.hasModel()) return;

        for (var i = 0; this.children.length > i; i++) {
            var child = this.children[i];
            if (!child.propertyPath) continue;
            if ((child.isFormField) && (child.$className === 'NAT.form.field.Radio')) {
                var value = this.store.currModel.get(child.propertyPath);
                this.isChanging = true;
                child.setValue(child.propertyValue === value);
                this.isChanging = false;
            }
        }
    },

    SetEditable: function(value) {
        var frm = this.getForm();
        var fields = frm.getFields();
        for (var i = 0; i < fields.length; i++) {
            var field = fields.getAt(i);
            field.setReadOnly(!value);
        }
    },

    FocusFirstField: function() {
        var frm = this.getForm();
        var fields = frm.getFields();
        if (fields.length > 0) {
            var field = fields.getAt(0);
            field.focus(true, 200);
        }
    },

    FocusFirstInvalidField: function() {
        var frm = this.getForm();
        var fields = frm.getFields();
        for (var i = 0; i < fields.length; i++) {
            var field = fields.getAt(i);
            if (field.hasErrors()) {
                field.focus(true, 200);
                return;
            }
        }
    },

//    FindOwnerEditor: function() {
//        if (this.ownerEditor) return this.ownerEditor;
//        this.ownerEditor = this.findParentByType('NATEditor');
//        return this.ownerEditor;
//    },
//
//    FindDataSource: function() {
//        if (this.dataSource) return this.dataSource;
//        if (!this.FindOwnerEditor()) return null;
//        this.dataSource = this.ownerEditor.dataSource.model[this.propertyPath];
//        return this.dataSource;
//    },

    Refresh: function(op, callback, scope) {
        Ext.callback(callback, scope, [null, null], 0);
    }
});

Ext.define('NAT.grid.column.Lookup', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.natlookupcolumn',

    initComponent: function(){
        this.callParent(arguments);

        if (!this.renderer) {
            this.renderer = function(value, metaData, record, rowIndex, colIndex) {
                var col = this.columns[colIndex];
                var editor = col.field || col.getEditor();
                var result = editor.renderer(value, record);
                return Ext.util.Format.htmlEncode(result);
            };
        }
    },

    bindStore: function(store) {
        this.getEditor().bindStore(store);
        this.fireEvent('bindstore', this, store);
    }
});

Ext.define('NAT.grid.column.Check', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.natcheckcolumn',

    constructor: function() {
        this.callParent(arguments);
    },

    renderer : function(value, metaData){
        var cssPrefix = Ext.baseCSSPrefix,
            cls = [cssPrefix + 'form-checkbox'];

        if (value) {
            metaData.tdCls = cssPrefix + 'form-cb-checked';
        }

        metaData.style = "text-align: -webkit-center;";

        return '<input type="button" class="' + cls.join(' ') + '">';
    }
});

Ext.define('NAT.grid.Panel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.natgrid',
    requires: ['Ext.grid.plugin.CellEditing'],

    dataStore: null,
    dataMember: null,

    initComponent: function () {
        this.viewConfig = Ext.applyIf(this.viewConfig || {}, {
            loadMask: false //if true after refreshing the store grid rows cant be selected
        });

        this.dataStore = this.store;
        this.store = null;

        this.callParent(arguments); //use empty store from Ext.data.StoreManager

        if (this.designMode) return;

//        for (var i = 0; this.columns.length > i; i++) {
//            var column = this.columns[i];
//            if (column.natIsLookup) {
//                column.on('bindstore', this.luColumn_bindstore, this);
//            }
//        }

        this.on('afterrender', this.this_afterRender, this, {single: true});
        this.on('select', this.this_select, this);
        this.on('deselect', this.this_deselect, this);
//        this.on('afterrender', this.this_afterrender, this);
    },

    this_afterRender: function(){
        var dataStore = this.dataStore;
        this.dataStore = null;
        this.bindStore(dataStore, this.dataMember);
    },

    //overriden from Ext.panel.Table
    bindStore: function(dataStore, dataMember) {
        if (dataStore == this.dataStore && dataMember == dataMember) return;

        if (this.dataStore && this.dataMember) {
            this.dataStore.un('currentmodelchanged', this.dataStore_currentmodelchanged, this);
        }

        this.dataStore = dataStore;
        this.dataMember = dataMember;

        if (Ext.isString(this.dataStore)){
            //local store?
            var natpanel = this.up('natpanel');
            if (natpanel){
                this.dataStore = natpanel.stores.getByKey(this.dataStore);
            }
            //global store?
            if (!this.dataStore){
                this.dataStore = Ext.data.StoreManager.lookup(this.dataStore);
            }
        }

        if (this.dataStore && this.dataMember) {
            this.dataStore.on('currentmodelchanged', this.dataStore_currentmodelchanged, this);
        }

        if (this.dataStore && !this.dataMember) {
            this.callParent([this.dataStore]);
        }
    },

    dataStore_currentmodelchanged: function(currModel){
        var store = (currModel) ? currModel['hasMany_' + this.dataMember] : Ext.data.StoreManager.lookup('ext-empty-store');
        this.superclass.bindStore.call(this, store);
    },

    this_select: function (rowModel, model) {
        if (!this.store) return;
        this.store.Select(model);
    },

    this_deselect: function (rowModel, model) {
        if (!this.store) return;
        this.store.Deselect();
    },

//    luColumn_bindstore: function(column, store) {
//        this.mon(store, 'LoadCompleted', function(models, operation, success) {
//            if (models && models.length > 0) {
//                this.getView().refresh();
//            }
//        }, this);
//    },

    getSelected: function () {
        var selRecords = this.getSelectionModel().getSelection();
        if (selRecords.length == 0) return null;
        return selRecords[0];
    },

    Select: function (models, keepExisting, suppressEvent) {
        this.getSelectionModel().select(models, keepExisting, suppressEvent);
    },

    Deselect: function (models, suppressEvent) {
        this.getSelectionModel().deselect(models, suppressEvent);
    }

//    startEdit: function(model, columnItemId) {
//        var plugin = this.getPlugin();
//        var column = this.headerCt.child(columnItemId);
//        if (!column) return;
//
//        if (Ext.isString(model)) {
//            model = this.store.getById(model);
//        }
//        if (!model) return;
//
//        this.Select(model);
//        plugin.startEdit(model, column);
//    }
});

Ext.define('natjs.overrides.app.Application', {
    requires: ['Ext.app.Application']
}, function() {
    Ext.override(Ext.app.Application, {

        baseUrl: '',
        modelNamespace: '',

        constructor: function(config) {
            config = config || {};
            Ext.global.app = this;

            this.baseUrl = this.GetBaseURL();
            this.modelNamespace = config.name + '.model.';

            return this.callParent([config]);
        },

        GetModelNameWithNamespace: function(modelName) {
            if (Ext.String.startsWith(modelName, this.modelNamespace)) return modelName;
            return this.modelNamespace + modelName;
        },

        GetModelNameWithoutNamespace: function(modelName) {
            if (!Ext.String.startsWith(modelName, this.modelNamespace)) return modelName;
            return modelName.slice(this.modelNamespace.length);
        },

        GetBaseURL: function() {
            var url = location.href;  // entire url including querystring - also: window.location.href;
            var baseUrl = url.substring(0, url.indexOf('/', 14));
            return baseUrl + "/";
        },

        ShowLoadingMask: function () {
            var loadText = 'Please wait...';
            Ext.getBody().mask(loadText, 'loading');
        },

        HideLoadingMask: function () {
            Ext.getBody().unmask();
        },

        ShowLoadingMaskOnAjax: function () {
            var loadText = 'Please wait...';
            Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask(loadText, 'loading') }, Ext.getBody());
            Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
            Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
        },

        natCreateModel: function(model, config, keepEditing) {
            config = config || {};
            var className = '';

            if (Ext.isString(model)) className = this.GetModelNameWithoutNamespace(model);
            else if (Ext.isFunction(model)) className = this.GetModelNameWithoutNamespace(model.$className);

            if (className == '') return null;

            var fullClassName = this.GetModelNameWithNamespace(className);

            var m = Ext.create(fullClassName);

			m.phantom = true;

            m.beginEdit();
            m.set('_type', className);
            m.set(config);

            for (var i = 0; i < m.associations.length; i++) {
                var association = m.associations.items[i];
                association.Created(m);
            }

            if (!keepEditing){
                m.endEdit();
            }

            return m;
        }
    });
});

Ext.define('natjs.overrides.container.Container', {
    requires: ['Ext.container.Container']
}, function() {
    Ext.override(Ext.container.Container, {

        queryByComponentId: function(componentId) {
            var components = this.queryBy(function(comp){
                return (comp.id == componentId);
            }, this);

            return (components.length == 1) ? components[0] : null;
        },

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
});

Ext.define('natjs.overrides.data.HasManyAssociation', {
    requires: ['Ext.data.HasManyAssociation']
}, function() {
    Ext.override(Ext.data.HasManyAssociation, {

        constructor: function(config) {
            var me = this,
                ownerProto,
                name;

            Ext.data.HasManyAssociation.superclass.constructor.call(this, config);

            me.name = me.name || Ext.util.Inflector.pluralize(me.associatedName.toLowerCase());

            ownerProto = me.ownerModel.prototype;
            name = me.name;

            Ext.applyIf(me, {
                storeName : 'hasMany_' + me.name,
                foreignKey: me.ownerName.toLowerCase() + "_id"
            });

            ownerProto[name] = me.createStore();
        },

        createStore: function() {
            var that            = this,
                associatedModel = that.associatedModel,
                storeName       = that.storeName,
                foreignKey      = that.foreignKey,
                primaryKey      = that.primaryKey,
                filterProperty  = that.filterProperty,
                autoLoad        = that.autoLoad,
                storeConfig     = that.storeConfig || {};

            return function() {
                var me = this,
                    config, filter,
                    modelDefaults = {};

                if (me[storeName] === undefined) {
                    if (filterProperty) {
                        filter = {
                            property  : filterProperty,
                            value     : me.get(filterProperty),
                            exactMatch: true
                        };
                    } else {
                        filter = {
                            property  : foreignKey,
                            value     : me.get(primaryKey),
                            exactMatch: true
                        };
                    }

                    modelDefaults[foreignKey] = me.get(primaryKey);

                    config = Ext.apply({}, storeConfig, {
                        model        : associatedModel,
                        filters      : [filter],
                        remoteFilter : false,
                        modelDefaults: modelDefaults
                    });

                    //me[storeName] = Ext.create('Ext.data.Store', config);
                    me[storeName] = Ext.create('widget.natstore', config); //NAT Support!!!
                    if (autoLoad) {
                        me[storeName].load();
                    }

                    //Owner record fires change event when its hasMany association changes
                    me[storeName].on('update', me.associationChanged, me);
                    me[storeName].on('add', me.associationChanged, me);
                    me[storeName].on('remove', me.associationChanged, me);
                }

                return me[storeName];
            };
        },

        Created: function(record) {
            record[this.name]();
        },

        Merge: function(record, source) {
            var store = record[this.storeName];
            var sourceStore = source[this.storeName];
            store.Merge(sourceStore);
        },

        read: function(record, associationData){
            var store = record[this.name](),
                proxy = store.proxy,
                reader = proxy.getReader(),
                inverse;



            var records = reader.read(associationData).records;
            store.add(records);
//            for (var i = 0; i < records.length; i++) {
//                records[i].Loaded();
//            }

            //now that we've added the related records to the hasMany association, set the inverse belongsTo
            //association on each of them if it exists
            inverse = this.associatedModel.prototype.associations.findBy(function(assoc){
                return assoc.type === 'belongsTo' && assoc.associatedName === record.$className;
            });

            //if the inverse association was found, set it now on each record we've just created
            if (inverse) {
                store.data.each(function(associatedRecord){
                    associatedRecord[inverse.instanceName] = record;
                });
            }
        },

        write: function(record, data) {
            var store = record[this.storeName],
                proxy = store.proxy,
                writer = proxy.getWriter();

            var collection = data[this.name] = [];
            store.data.each(function(associatedRecord){
                var associatedData = writer.getRecordData(associatedRecord);
                collection.push(associatedData);
            });
        },

        reject: function (record, silent) {
            var store = record[this.storeName];
            if (store) store.reject();
        },

        commit : function(record, silent) {
            var store = record[this.storeName];
            if (store) store.commit();
        },

        IsChanged: function(record) {
            var store = record[this.storeName];
            return store.IsChanged();
        }
    });
});

Ext.define('natjs.overrides.data.validations', {
    requires: ['Ext.data.validations']
}, function() {

    Ext.data.validations['presenceMessage'] = 'This field is required';


    Ext.data.validations.getMessage = function(validation) {
        if (validation.type == "length") {
            return "Length must be minimum " + validation.min + " and maximum " + validation.max + " character!";
        }
        return null;
    }
});

Ext.define('natjs.overrides.grid.CellEditor', {
    requires: ['Ext.grid.CellEditor']
}, function() {
    Ext.override(Ext.grid.CellEditor, {

        /**
         * @private
         * Realigns the Editor to the grid cell, or to the text node in the grid inner cell
         * if the inner cell contains multiple child nodes.
         */
        realign: function(autoSize) {
            var me = this,
                boundEl = me.boundEl,
                innerCell = boundEl.first(),
                children = innerCell.dom.childNodes,
                childCount = children.length,
                offsets = Ext.Array.clone(me.offsets),
                inputEl = me.field.inputEl,
                lastChild, leftBound, rightBound, width, height;

// IZS BEGIN: I changed this behaviour bc I rendering a div into a tree cell,
// but dont want this fact to impact on the editor show up position

//            // If the inner cell has more than one child, or the first child node is not a text node,
//            // let's assume this cell contains additional elements before the text node.
//            // This is the case for tree cells, but could also be used to accomodate grid cells that
//            // have a custom renderer that render, say, an icon followed by some text for example
//            // For now however, this support will only be used for trees.
//            if(me.isForTree && (childCount > 1 || (childCount === 1 && children[0].nodeType !== 3))) {
//                // get the inner cell's last child
//                lastChild = innerCell.last();
//                // calculate the left bound of the text node
//                leftBound = lastChild.getOffsetsTo(innerCell)[0] + lastChild.getWidth();
//                // calculate the right bound of the text node (this is assumed to be the right edge of
//                // the inner cell, since we are assuming the text node is always the last node in the
//                // inner cell)
//                rightBound = innerCell.getWidth();
//                // difference between right and left bound is the text node's allowed "width",
//                // this will be used as the width for the editor.
//                width = rightBound - leftBound;
//                // adjust width for column lines - this ensures the editor will be the same width
//                // regardless of columLines config
//                if(!me.editingPlugin.grid.columnLines) {
//                    width --;
//                }
//                // set the editor's x offset to the left bound position
//                offsets[0] += leftBound;
//
//                me.addCls(Ext.baseCSSPrefix + 'grid-editor-on-text-node');
//            } else {
//                width = boundEl.getWidth() - 1; works only if columnLines: true,
//            }

            var refEl = boundEl;
            var size = boundEl.getViewSize();
            if (childCount === 1 && children[0].nodeType !== 3){
                refEl = children[0];
                size = { width: refEl.offsetWidth, height: refEl.offsetHeight };
            }

            if (autoSize === true) {
                me.field.setWidth(size.width);
                me.field.setHeight(size.height);
            }

            offsets[0] -= inputEl.dom.offsetLeft;
            offsets[1] -= inputEl.dom.offsetTop;

            me.alignTo(refEl, me.alignment, offsets);
// IZS END
        }
    });
});

Ext.define('natjs.overrides.AbstractComponent', {
    requires: ['Ext.AbstractComponent']
}, function() {
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
});

Ext.define('natjs.overrides.Object', {
}, function() {

    Ext.Array.find = function(array, attribute, value) {
		for (var i=0; array.length > i; i++){
			if (array[i] && (array[i][attribute] == value)) return array[i];
		}
		return null;
    };

    Ext.Array.findAll = function(array, attribute, value) {
        if (!array) return [];
        return Ext.Array.filter(array, function(item){ return (item[attribute] == value); });
    };

    //Concat a string array into one string
    Ext.Array.convertToString = function(array, separator) {
        if (!array) return '';
        var result = '';
        for (var i=0; array.length > i; i++){
            result += array[i];
            if ((separator) && (i < array.length-1)) result += separator;
        }
        return result;
    };

	Ext.Array.convertToObject = function(array) {
		var strValue = '';
		for (var i=0; array.length > i; i++){ strValue += array[i]; }
		strValue = 'a=' + strValue;
		try{
			return eval(strValue);
		}
		catch(e){
			//console.log('object config value not evaulated: ' + array);
			return null;
		}
	}
});

/**
 * This class is used as a set of methods that are applied to the prototype of a
 * Model to decorate it with a Node API. This means that models used in conjunction with a tree
 * will have all of the tree related methods available on the model. In general this class will
 * not be used directly by the developer. This class also creates extra fields on the model if
 * they do not exist, to help maintain the tree state and UI. These fields are documented as
 * config options.
 */
Ext.define('Ext.data.NodeInterface', {
    requires: ['Ext.data.Field'],

    /**
     * @cfg {String} parentId
     * ID of parent node.
     */

    /**
     * @cfg {Number} index
     * The position of the node inside its parent. When parent has 4 children and the node is third amongst them,
     * index will be 2.
     */

    /**
     * @cfg {Number} depth
     * The number of parents this node has. A root node has depth 0, a child of it depth 1, and so on...
     */

    /**
     * @cfg {Boolean} [expanded=false]
     * True if the node is expanded.
     */

    /**
     * @cfg {Boolean} [expandable=false]
     * Set to true to allow for expanding/collapsing of this node.
     */

    /**
     * @cfg {Boolean} [checked=null]
     * Set to true or false to show a checkbox alongside this node.
     */

    /**
     * @cfg {Boolean} [leaf=false]
     * Set to true to indicate that this child can have no children. The expand icon/arrow will then not be
     * rendered for this node.
     */

    /**
     * @cfg {String} cls
     * CSS class to apply for this node.
     */

    /**
     * @cfg {String} iconCls
     * CSS class to apply for this node's icon.
     */

    /**
     * @cfg {String} icon
     * URL for this node's icon.
     */

    /**
     * @cfg {Boolean} root
     * True if this is the root node.
     */

    /**
     * @cfg {Boolean} isLast
     * True if this is the last node.
     */

    /**
     * @cfg {Boolean} isFirst
     * True if this is the first node.
     */

    /**
     * @cfg {Boolean} [allowDrop=true]
     * Set to false to deny dropping on this node.
     */

    /**
     * @cfg {Boolean} [allowDrag=true]
     * Set to false to deny dragging of this node.
     */

    /**
     * @cfg {Boolean} [loaded=false]
     * True if the node has finished loading.
     */

    /**
     * @cfg {Boolean} [loading=false]
     * True if the node is currently loading.
     */

    /**
     * @cfg {String} href
     * An URL for a link that's created when this config is specified.
     */

    /**
     * @cfg {String} hrefTarget
     * Target for link. Only applicable when {@link #href} also specified.
     */

    /**
     * @cfg {String} qtip
     * Tooltip text to show on this node.
     */

    /**
     * @cfg {String} qtitle
     * Tooltip title.
     */

    /**
     * @cfg {String} text
     * The text for to show on node label.
     */

    /**
     * @cfg {Ext.data.NodeInterface[]} children
     * Array of child nodes.
     */


    /**
     * @property nextSibling
     * A reference to this node's next sibling node. `null` if this node does not have a next sibling.
     */

    /**
     * @property previousSibling
     * A reference to this node's previous sibling node. `null` if this node does not have a previous sibling.
     */

    /**
     * @property parentNode
     * A reference to this node's parent node. `null` if this node is the root node.
     */

    /**
     * @property lastChild
     * A reference to this node's last child node. `null` if this node has no children.
     */

    /**
     * @property firstChild
     * A reference to this node's first child node. `null` if this node has no children.
     */

    /**
     * @property childNodes
     * An array of this nodes children.  Array will be empty if this node has no chidren.
     */

    statics: {
        /**
         * This method allows you to decorate a Model's class to implement the NodeInterface.
         * This adds a set of methods, new events, new properties and new fields on every Record.
         * @param {Ext.Class/Ext.data.Model} modelClass The Model class or an instance of the Model class you want to
         * decorate the prototype of.
         * @static
         */
        decorate: function(modelClass) {
            var idName, idType;

            // get the reference to the model class, in case the argument was a string or a record
            if (typeof modelClass == 'string') {
                modelClass = Ext.ModelManager.getModel(modelClass);
            } else if (modelClass.isModel) {
                modelClass = Ext.ModelManager.getModel(modelClass.modelName);
            }

            // avoid unnecessary work in case the model was already decorated
            if (modelClass.prototype.isNode) {
                return;
            }

            idName = modelClass.prototype.idProperty;
            idType = modelClass.prototype.fields.get(idName).type.type;
            modelClass.override(this.getPrototypeBody());
            this.applyFields(modelClass, [
                {name: 'parentId',   type: idType,    defaultValue: null},
                {name: 'index',      type: 'int',     defaultValue: null},
                {name: 'depth',      type: 'int',     defaultValue: 0},
                {name: 'expanded',   type: 'bool',    defaultValue: false, persist: false},
                {name: 'expandable', type: 'bool',    defaultValue: true, persist: false},
                {name: 'checked',    type: 'auto',    defaultValue: null, persist: false},
                {name: 'leaf',       type: 'bool',    defaultValue: false},
                {name: 'cls',        type: 'string',  defaultValue: null, persist: false},
                {name: 'iconCls',    type: 'string',  defaultValue: null, persist: false},
                {name: 'icon',       type: 'string',  defaultValue: null, persist: false},
                {name: 'root',       type: 'boolean', defaultValue: false, persist: false},
                {name: 'isLast',     type: 'boolean', defaultValue: false, persist: false},
                {name: 'isFirst',    type: 'boolean', defaultValue: false, persist: false},
                {name: 'allowDrop',  type: 'boolean', defaultValue: true, persist: false},
                {name: 'allowDrag',  type: 'boolean', defaultValue: true, persist: false},
                {name: 'loaded',     type: 'boolean', defaultValue: false, persist: false},
                {name: 'loading',    type: 'boolean', defaultValue: false, persist: false},
                {name: 'href',       type: 'string',  defaultValue: null, persist: false},
                {name: 'hrefTarget', type: 'string',  defaultValue: null, persist: false},
                {name: 'qtip',       type: 'string',  defaultValue: null, persist: false},
                {name: 'qtitle',     type: 'string',  defaultValue: null, persist: false},
                {name: 'children',   type: 'auto',   defaultValue: null, persist: false}
            ]);
        },

        applyFields: function(modelClass, addFields) {
            var modelPrototype = modelClass.prototype,
                fields = modelPrototype.fields,
                keys = fields.keys,
                ln = addFields.length,
                addField, i;

            for (i = 0; i < ln; i++) {
                addField = addFields[i];
                if (!Ext.Array.contains(keys, addField.name)) {
                    fields.add(new Ext.data.Field(addField));
                }
            }
        },

//        applyField: function(modelClass, addField) {
//            var modelPrototype = modelClass.prototype,
//                fields = modelPrototype.fields,
//                keys = fields.keys;
//
//            if (!Ext.Array.contains(keys, addField.name)) {
//                fields.add(new Ext.data.Field(addField));
//            }
//
//            for(var model in Ext.ModelManager.types) {
//                if (Ext.ModelManager.types.hasOwnProperty(model)) {
//                    var tmpModelClass = Ext.ModelManager.types[model];
//                    if (tmpModelClass.superclass.$className == modelClass.$className) {
//                        this.applyField(tmpModelClass, addField);
//                    }
//                }
//            }
//        },

        removeField: function(modelClass, fieldName) {
            var modelPrototype = modelClass.prototype,
                fields = modelPrototype.fields;

            return fields.removeAtKey(fieldName);
        },

        removeFields: function(modelClass, removeFields) {
            var modelPrototype = modelClass.prototype,
                fields = modelPrototype.fields,
                keys = fields.keys,
                ln = removeFields.length,
                removeField, i, name,
                removedFields = [];

            for (i = 0; i < ln; i++) {
                removeField = removedFields[i];
                if (Ext.Array.contains(keys, removeField.name)) {
                    removedFields.push(removeField);
                    fields.remove(removeField);
                }
            }

            return removedFields;
        },

        getPrototypeBody: function() {
            return {
                /**
                 * @property {Boolean} isNode
                 * `true` in this class to identify an object as an instantiated Node, or subclass thereof.
                 */
                isNode: true,

                constructor: function() {
                    var me = this;
                    this.callParent(arguments);
                    Ext.applyIf(me, {
                        firstChild: null,
                        lastChild: null,
                        parentNode: null,
                        previousSibling: null,
                        nextSibling: null,
                        childNodes: []
                    });
                    me.enableBubble([
                    /**
                     * @event append
                     * Fires when a new child node is appended
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The newly appended node
                     * @param {Number} index The index of the newly appended node
                     */
                        "append",

                    /**
                     * @event remove
                     * Fires when a child node is removed
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The removed node
                     * @param {Boolean} isMove `true` if the child node is being removed so it can be moved to another position in the tree.
                     * (a side effect of calling {@link Ext.data.NodeInterface#appendChild appendChild} or
                     * {@link Ext.data.NodeInterface#insertBefore insertBefore} with a node that already has a parentNode)
                     */
                        "remove",

                    /**
                     * @event move
                     * Fires when this node is moved to a new location in the tree
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} oldParent The old parent of this node
                     * @param {Ext.data.NodeInterface} newParent The new parent of this node
                     * @param {Number} index The index it was moved to
                     */
                        "move",

                    /**
                     * @event insert
                     * Fires when a new child node is inserted.
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The child node inserted
                     * @param {Ext.data.NodeInterface} refNode The child node the node was inserted before
                     */
                        "insert",

                    /**
                     * @event beforeappend
                     * Fires before a new child is appended, return false to cancel the append.
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The child node to be appended
                     */
                        "beforeappend",

                    /**
                     * @event beforeremove
                     * Fires before a child is removed, return false to cancel the remove.
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The child node to be removed
                     * @param {Boolean} isMove `true` if the child node is being removed so it can be moved to another position in the tree.
                     * (a side effect of calling {@link Ext.data.NodeInterface#appendChild appendChild} or
                     * {@link Ext.data.NodeInterface#insertBefore insertBefore} with a node that already has a parentNode)
                     */
                        "beforeremove",

                    /**
                     * @event beforemove
                     * Fires before this node is moved to a new location in the tree. Return false to cancel the move.
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} oldParent The parent of this node
                     * @param {Ext.data.NodeInterface} newParent The new parent this node is moving to
                     * @param {Number} index The index it is being moved to
                     */
                        "beforemove",

                    /**
                     * @event beforeinsert
                     * Fires before a new child is inserted, return false to cancel the insert.
                     * @param {Ext.data.NodeInterface} this This node
                     * @param {Ext.data.NodeInterface} node The child node to be inserted
                     * @param {Ext.data.NodeInterface} refNode The child node the node is being inserted before
                     */
                        "beforeinsert",

                    /**
                     * @event expand
                     * Fires when this node is expanded.
                     * @param {Ext.data.NodeInterface} this The expanding node
                     */
                        "expand",

                    /**
                     * @event collapse
                     * Fires when this node is collapsed.
                     * @param {Ext.data.NodeInterface} this The collapsing node
                     */
                        "collapse",

                    /**
                     * @event beforeexpand
                     * Fires before this node is expanded.
                     * @param {Ext.data.NodeInterface} this The expanding node
                     */
                        "beforeexpand",

                    /**
                     * @event beforecollapse
                     * Fires before this node is collapsed.
                     * @param {Ext.data.NodeInterface} this The collapsing node
                     */
                        "beforecollapse",

                    /**
                     * @event sort
                     * Fires when this node's childNodes are sorted.
                     * @param {Ext.data.NodeInterface} this This node.
                     * @param {Ext.data.NodeInterface[]} childNodes The childNodes of this node.
                     */
                        "sort"
                    ]);
                    return me;
                },
                /**
                 * Ensures that the passed object is an instance of a Record with the NodeInterface applied
                 * @return {Ext.data.NodeInterface}
                 */
                createNode: function(node) {
                    if (Ext.isObject(node) && !node.isModel) {
                        node = Ext.ModelManager.create(node, this.modelName);
                    }
                    // The node may already decorated, but may not have been
                    // so when the model constructor was called. If not,
                    // setup defaults here
                    if (!node.childNodes) {
                        Ext.applyIf(node, {
                            firstChild: null,
                            lastChild: null,
                            parentNode: null,
                            previousSibling: null,
                            nextSibling: null,
                            childNodes: []
                        });
                    }
                    return node;
                },

                /**
                 * Returns true if this node is a leaf
                 * @return {Boolean}
                 */
                isLeaf : function() {
                    return this.get('leaf') === true;
                },

                /**
                 * Sets the first child of this node
                 * @private
                 * @param {Ext.data.NodeInterface} node
                 */
                setFirstChild : function(node) {
                    this.firstChild = node;
                },

                /**
                 * Sets the last child of this node
                 * @private
                 * @param {Ext.data.NodeInterface} node
                 */
                setLastChild : function(node) {
                    this.lastChild = node;
                },

                /**
                 * Updates general data of this node like isFirst, isLast, depth. This
                 * method is internally called after a node is moved. This shouldn't
                 * have to be called by the developer unless they are creating custom
                 * Tree plugins.
                 * @return {Boolean}
                 */
                updateInfo: function(commit) {
                    var me = this,
                        isRoot = me.isRoot(),
                        parentNode = me.parentNode,
                        isFirst = (!parentNode || isRoot ? true : parentNode.firstChild === me),
                        isLast = (!parentNode || isRoot ? true : parentNode.lastChild === me),
                        depth = 0,
                        parent = me,
                        children = me.childNodes,
                        len = children.length,
                        i = 0,
                        phantom = me.phantom;

                    while (parent.parentNode) {
                        ++depth;
                        parent = parent.parentNode;
                    }

                    me.beginEdit();
                    me.set({
                        isFirst: isFirst,
                        isLast: isLast,
                        depth: depth,
                        index: parentNode ? parentNode.indexOf(me) : 0,
                        parentId: parentNode ? parentNode.getId() : null
                    });
                    me.endEdit(true);
                    if (commit) {
                        me.commit();
                        me.phantom = phantom;
                    }

                    for (i = 0; i < len; i++) {
                        children[i].updateInfo(commit);
                    }
                },

                /**
                 * Returns true if this node is the last child of its parent
                 * @return {Boolean}
                 */
                isLast : function() {
                    return this.get('isLast');
                },

                /**
                 * Returns true if this node is the first child of its parent
                 * @return {Boolean}
                 */
                isFirst : function() {
                    return this.get('isFirst');
                },

                /**
                 * Returns true if this node has one or more child nodes, else false.
                 * @return {Boolean}
                 */
                hasChildNodes : function() {
                    return !this.isLeaf() && this.childNodes.length > 0;
                },

                /**
                 * Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>
                 * node attribute is explicitly specified as true, otherwise returns false.
                 * @return {Boolean}
                 */
                isExpandable : function() {
                    var me = this;

                    if (me.get('expandable')) {
                        return !(me.isLeaf() || (me.isLoaded() && !me.hasChildNodes()));
                    }
                    return false;
                },

                /**
                 * Inserts node(s) as the last child node of this node.
                 *
                 * If the node was previously a child node of another parent node, it will be removed from that node first.
                 *
                 * @param {Ext.data.NodeInterface/Ext.data.NodeInterface[]} node The node or Array of nodes to append
                 * @return {Ext.data.NodeInterface} The appended node if single append, or null if an array was passed
                 */
                appendChild : function(node, suppressEvents, commit) {
                    var me = this,
                        i, ln,
                        index,
                        oldParent,
                        ps;

                    // if passed an array do them one by one
                    if (Ext.isArray(node)) {
                        // suspend auto syncing while we append all the nodes
                        me.callStore('suspendAutoSync');
                        for (i = 0, ln = node.length - 1; i < ln; i++) {
                            me.appendChild(node[i]);
                        }
                        // resume auto syncing before we append the last node
                        me.callStore('resumeAutoSync');
                        me.appendChild(node[ln]);
                    } else {
                        // Make sure it is a record
                        node = me.createNode(node);

                        if (suppressEvents !== true && (!me.hasListeners.beforeappend || me.fireEvent("beforeappend", me, node) === false)) {
                            return false;
                        }

                        index = me.childNodes.length;
                        oldParent = node.parentNode;

                        // it's a move, make sure we move it cleanly
                        if (oldParent) {
                            if (suppressEvents !== true && (!me.hasListeners.beforeremove || node.fireEvent("beforemove", node, oldParent, me, index) === false)) {
                                return false;
                            }
                            oldParent.removeChild(node, false, false, true);
                        }

                        index = me.childNodes.length;
                        if (index === 0) {
                            me.setFirstChild(node);
                        }

                        me.childNodes.push(node);
                        node.parentNode = me;
                        node.nextSibling = null;

                        me.setLastChild(node);

                        ps = me.childNodes[index - 1];
                        if (ps) {
                            node.previousSibling = ps;
                            ps.nextSibling = node;
                            ps.updateInfo(commit);
                        } else {
                            node.previousSibling = null;
                        }

                        node.updateInfo(commit);

                        // As soon as we append a child to this node, we are loaded
                        if (!me.isLoaded()) {
                            me.set('loaded', true);
                        } else if (me.childNodes.length === 1) {
                            // This isn't ideal, however none of the underlying fields have changed
                            // but we still need to update the UI

                            //IZS begin: check if not editing
                            if (!me.editing){
                                me.afterEdit([]);
                            }
                            //IZS end
                        }

                        if(!node.isLeaf() && node.phantom) {
                            node.set('loaded', true);
                        }

                        if (suppressEvents !== true) {
                            me.fireEvent("append", me, node, index);

                            if (oldParent) {
                                node.fireEvent("move", node, oldParent, me, index);
                            }
                        }

                        //IZS begin join child to this node's TreeStores
                        for (var s=0; me.stores.length > s; s++){
                            if (me.stores[s].getRootNode){
                                node.join(me.stores[s]);
                            }
                        }
                        //IZS end

                        return node;
                    }
                },

                /**
                 * Returns the bubble target for this node
                 * @private
                 * @return {Object} The bubble target
                 */
                getBubbleTarget: function() {
                    return this.parentNode;
                },

                /**
                 * Removes a child node from this node.
                 * @param {Ext.data.NodeInterface} node The node to remove
                 * @param {Boolean} [destroy=false] True to destroy the node upon removal.
                 * @return {Ext.data.NodeInterface} The removed node
                 */
                removeChild : function(node, destroy, suppressEvents, isMove) {
                    var me = this,
                        index = me.indexOf(node),
                        i, childCount;

                    if (index == -1 || (suppressEvents !== true && (!me.hasListeners.beforeremove || me.fireEvent("beforeremove", me, node, !!isMove) === false))) {
                        return false;
                    }

                    // remove it from childNodes collection
                    Ext.Array.erase(me.childNodes, index, 1);

                    // update child refs
                    if (me.firstChild == node) {
                        me.setFirstChild(node.nextSibling);
                    }
                    if (me.lastChild == node) {
                        me.setLastChild(node.previousSibling);
                    }

                    // update siblings
                    if (node.previousSibling) {
                        node.previousSibling.nextSibling = node.nextSibling;
                    }
                    if (node.nextSibling) {
                        node.nextSibling.previousSibling = node.previousSibling;
                    }

                    // update the info for all siblings starting at the index before the node's old index (or 0 if the removed node was the firstChild)
                    for(i = index > 0 ? index - 1 : 0, childCount = me.childNodes.length; i < childCount; i++) {
                        me.childNodes[i].updateInfo();
                    }

                    // If this node suddenly doesnt have childnodes anymore, update myself
                    if (!me.childNodes.length) {
                        me.set('loaded', me.isLoaded());
                    }

                    if (suppressEvents !== true) {
                        if (me.hasListeners.remove) {
                            me.fireEvent("remove", me, node, !!isMove);
                        }
                    }

                    //IZS begin unjoin child from this node's TreeStores
                    for (var s=0; me.stores.length > s; s++){
                        if (me.stores[s].getRootNode){
                            node.unjoin(me.stores[s]);
                        }
                    }
                    //IZS end

                    if (destroy) {
                        node.destroy(true);
                    } else {
                        node.clear();
                    }

                    return node;
                },

                /**
                 * Creates a copy (clone) of this Node.
                 * @param {String} [id] A new id, defaults to this Node's id.
                 * @param {Boolean} [deep=false] True to recursively copy all child Nodes into the new Node.
                 * False to copy without child Nodes.
                 * @return {Ext.data.NodeInterface} A copy of this Node.
                 */
                copy: function(newId, deep) {
                    var me = this,
                        result = me.callOverridden(arguments),
                        len = me.childNodes ? me.childNodes.length : 0,
                        i;

                    // Move child nodes across to the copy if required
                    if (deep) {
                        for (i = 0; i < len; i++) {
                            result.appendChild(me.childNodes[i].copy(true));
                        }
                    }
                    return result;
                },

                /**
                 * Clears the node.
                 * @private
                 * @param {Boolean} [destroy=false] True to destroy the node.
                 */
                clear : function(destroy) {
                    var me = this;

                    // clear any references from the node
                    me.parentNode = me.previousSibling = me.nextSibling = null;
                    if (destroy) {
                        me.firstChild = me.lastChild = null;
                    }
                },

                /**
                 * Destroys the node.
                 */
                destroy : function(silent) {
                    /*
                     * Silent is to be used in a number of cases
                     * 1) When setRoot is called.
                     * 2) When destroy on the tree is called
                     * 3) For destroying child nodes on a node
                     */
                    var me      = this,
                        options = me.destroyOptions,
                        nodes   = me.childNodes,
                        nLen    = nodes.length,
                        n;

                    if (silent === true) {
                        me.clear(true);

                        for (n = 0; n < nLen; n++) {
                            nodes[n].destroy(true);
                        }

                        me.childNodes = null;
                        delete me.destroyOptions;
                        me.callOverridden([options]);
                    } else {
                        me.destroyOptions = silent;
                        // overridden method will be called, since remove will end up calling destroy(true);
                        me.remove(true);
                    }
                },

                /**
                 * Inserts the first node before the second node in this nodes childNodes collection.
                 * @param {Ext.data.NodeInterface} node The node to insert
                 * @param {Ext.data.NodeInterface} refNode The node to insert before (if null the node is appended)
                 * @return {Ext.data.NodeInterface} The inserted node
                 */
                insertBefore : function(node, refNode, suppressEvents) {
                    var me = this,
                        index     = me.indexOf(refNode),
                        oldParent = node.parentNode,
                        refIndex  = index,
                        childCount, ps, i;

                    if (!refNode) { // like standard Dom, refNode can be null for append
                        return me.appendChild(node);
                    }

                    // nothing to do
                    if (node == refNode) {
                        return false;
                    }

                    // Make sure it is a record with the NodeInterface
                    node = me.createNode(node);

                    if (suppressEvents !== true && (!me.hasListeners.beforeinsert || me.fireEvent("beforeinsert", me, node, refNode) === false)) {
                        return false;
                    }

                    // when moving internally, indexes will change after remove
                    if (oldParent == me && me.indexOf(node) < index) {
                        refIndex--;
                    }

                    // it's a move, make sure we move it cleanly
                    if (oldParent) {
                        if (suppressEvents !== true && (!me.hasListeners.beforeremove || node.fireEvent("beforemove", node, oldParent, me, index, refNode) === false)) {
                            return false;
                        }
                        oldParent.removeChild(node, false, false, true);
                    }

                    if (refIndex === 0) {
                        me.setFirstChild(node);
                    }

                    Ext.Array.splice(me.childNodes, refIndex, 0, node);
                    node.parentNode = me;

                    node.nextSibling = refNode;
                    refNode.previousSibling = node;

                    ps = me.childNodes[refIndex - 1];
                    if (ps) {
                        node.previousSibling = ps;
                        ps.nextSibling = node;
                    } else {
                        node.previousSibling = null;
                    }

                    // update the info for all siblings starting at the index before the node's insertion point (or 0 if the inserted node is the firstChild)
                    for(i = refIndex > 0 ? refIndex - 1 : 0, childCount = me.childNodes.length; i < childCount; i++) {
                        me.childNodes[i].updateInfo();
                    }

                    if (!me.isLoaded()) {
                        me.set('loaded', true);
                    }
                    // If this node didnt have any childnodes before, update myself
                    else if (me.childNodes.length === 1) {
                        me.set('loaded', me.isLoaded());
                    }

                    if(!node.isLeaf() && node.phantom) {
                        node.set('loaded', true);
                    }

                    if (suppressEvents !== true) {
                        if (me.hasListeners.insert) {
                            me.fireEvent("insert", me, node, refNode);
                        }

                        if (oldParent && me.hasListeners.move) {
                            node.fireEvent("move", node, oldParent, me, refIndex, refNode);
                        }
                    }

                    //IZS begin join child to this node's TreeStores
                    for (var s=0; me.stores.length > s; s++){
                        if (me.stores[s].getRootNode){
                            node.join(me.stores[s]);
                        }
                    }
                    //IZS end

                    return node;
                },

                /**
                 * Inserts a node into this node.
                 * @param {Number} index The zero-based index to insert the node at
                 * @param {Ext.data.NodeInterface} node The node to insert
                 * @return {Ext.data.NodeInterface} The node you just inserted
                 */
                insertChild: function(index, node) {
                    var sibling = this.childNodes[index];
                    if (sibling) {
                        return this.insertBefore(node, sibling);
                    }
                    else {
                        return this.appendChild(node);
                    }
                },

                /**
                 * Removes this node from its parent
                 * @param {Boolean} [destroy=false] True to destroy the node upon removal.
                 * @return {Ext.data.NodeInterface} this
                 */
                remove : function(destroy, suppressEvents) {
                    var parentNode = this.parentNode;

                    if (parentNode) {
                        parentNode.removeChild(this, destroy, suppressEvents);
                    }
                    return this;
                },

                /**
                 * Removes all child nodes from this node.
                 * @param {Boolean} [destroy=false] <True to destroy the node upon removal.
                 * @return {Ext.data.NodeInterface} this
                 */
                removeAll : function(destroy, suppressEvents) {
                    var cn = this.childNodes,
                        n;

                    while ((n = cn[0])) {
                        this.removeChild(n, destroy, suppressEvents);
                    }
                    return this;
                },

                /**
                 * Returns the child node at the specified index.
                 * @param {Number} index
                 * @return {Ext.data.NodeInterface}
                 */
                getChildAt : function(index) {
                    return this.childNodes[index];
                },

                /**
                 * Replaces one child node in this node with another.
                 * @param {Ext.data.NodeInterface} newChild The replacement node
                 * @param {Ext.data.NodeInterface} oldChild The node to replace
                 * @return {Ext.data.NodeInterface} The replaced node
                 */
                replaceChild : function(newChild, oldChild, suppressEvents) {
                    var s = oldChild ? oldChild.nextSibling : null;

                    this.removeChild(oldChild, false, suppressEvents);
                    this.insertBefore(newChild, s, suppressEvents);
                    return oldChild;
                },

                /**
                 * Returns the index of a child node
                 * @param {Ext.data.NodeInterface} node
                 * @return {Number} The index of the node or -1 if it was not found
                 */
                indexOf : function(child) {
                    return Ext.Array.indexOf(this.childNodes, child);
                },

                /**
                 * Returns the index of a child node that matches the id
                 * @param {String} id The id of the node to find
                 * @return {Number} The index of the node or -1 if it was not found
                 */
                indexOfId: function(id) {
                    var childNodes = this.childNodes,
                        len = childNodes.length,
                        i = 0;

                    for (; i < len; ++i) {
                        if (childNodes[i].getId() === id) {
                            return i;
                        }
                    }
                    return -1;
                },

                /**
                 * Gets the hierarchical path from the root of the current node.
                 * @param {String} [field] The field to construct the path from. Defaults to the model idProperty.
                 * @param {String} [separator="/"] A separator to use.
                 * @return {String} The node path
                 */
                getPath: function(field, separator) {
                    field = field || this.idProperty;
                    separator = separator || '/';

                    var path = [this.get(field)],
                        parent = this.parentNode;

                    while (parent) {
                        path.unshift(parent.get(field));
                        parent = parent.parentNode;
                    }
                    return separator + path.join(separator);
                },

                /**
                 * Returns depth of this node (the root node has a depth of 0)
                 * @return {Number}
                 */
                getDepth : function() {
                    return this.get('depth');
                },

                /**
                 * Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function
                 * will be the args provided or the current node. If the function returns false at any point,
                 * the bubble is stopped.
                 * @param {Function} fn The function to call
                 * @param {Object} [scope] The scope (this reference) in which the function is executed. Defaults to the current Node.
                 * @param {Array} [args] The args to call the function with. Defaults to passing the current Node.
                 */
                bubble : function(fn, scope, args) {
                    var p = this;
                    while (p) {
                        if (fn.apply(scope || p, args || [p]) === false) {
                            break;
                        }
                        p = p.parentNode;
                    }
                },

                cascade: function() {
                    if (Ext.isDefined(Ext.global.console)) {
                        Ext.global.console.warn('Ext.data.Node: cascade has been deprecated. Please use cascadeBy instead.');
                    }
                    return this.cascadeBy.apply(this, arguments);
                },

                /**
                 * Cascades down the tree from this node, calling the specified function with each node. The arguments to the function
                 * will be the args provided or the current node. If the function returns false at any point,
                 * the cascade is stopped on that branch.
                 * @param {Function} fn The function to call
                 * @param {Object} [scope] The scope (this reference) in which the function is executed. Defaults to the current Node.
                 * @param {Array} [args] The args to call the function with. Defaults to passing the current Node.
                 */
                cascadeBy : function(fn, scope, args) {
                    if (fn.apply(scope || this, args || [this]) !== false) {
                        var childNodes = this.childNodes,
                            length     = childNodes.length,
                            i;

                        for (i = 0; i < length; i++) {
                            childNodes[i].cascadeBy(fn, scope, args);
                        }
                    }
                },

                /**
                 * Interates the child nodes of this node, calling the specified function with each node. The arguments to the function
                 * will be the args provided or the current node. If the function returns false at any point,
                 * the iteration stops.
                 * @param {Function} fn The function to call
                 * @param {Object} [scope] The scope (this reference) in which the function is executed. Defaults to the current Node in iteration.
                 * @param {Array} [args] The args to call the function with. Defaults to passing the current Node.
                 */
                eachChild : function(fn, scope, args) {
                    var childNodes = this.childNodes,
                        length     = childNodes.length,
                        i;

                    for (i = 0; i < length; i++) {
                        if (fn.apply(scope || this, args || [childNodes[i]]) === false) {
                            break;
                        }
                    }
                },

                /**
                 * Finds the first child that has the attribute with the specified value.
                 * @param {String} attribute The attribute name
                 * @param {Object} value The value to search for
                 * @param {Boolean} [deep=false] True to search through nodes deeper than the immediate children
                 * @return {Ext.data.NodeInterface} The found child or null if none was found
                 */
                findChild : function(attribute, value, deep) {
                    return this.findChildBy(function() {
                        return this.get(attribute) == value;
                    }, null, deep);
                },

                /**
                 * Finds the first child by a custom function. The child matches if the function passed returns true.
                 * @param {Function} fn A function which must return true if the passed Node is the required Node.
                 * @param {Object} [scope] The scope (this reference) in which the function is executed. Defaults to the Node being tested.
                 * @param {Boolean} [deep=false] True to search through nodes deeper than the immediate children
                 * @return {Ext.data.NodeInterface} The found child or null if none was found
                 */
                findChildBy : function(fn, scope, deep) {
                    var cs = this.childNodes,
                        len = cs.length,
                        i = 0, n, res;

                    for (; i < len; i++) {
                        n = cs[i];
                        if (fn.call(scope || n, n) === true) {
                            return n;
                        }
                        else if (deep) {
                            res = n.findChildBy(fn, scope, deep);
                            if (res !== null) {
                                return res;
                            }
                        }
                    }

                    return null;
                },

                /**
                 * Returns true if this node is an ancestor (at any point) of the passed node.
                 * @param {Ext.data.NodeInterface} node
                 * @return {Boolean}
                 */
                contains : function(node) {
                    return node.isAncestor(this);
                },

                /**
                 * Returns true if the passed node is an ancestor (at any point) of this node.
                 * @param {Ext.data.NodeInterface} node
                 * @return {Boolean}
                 */
                isAncestor : function(node) {
                    var p = this.parentNode;
                    while (p) {
                        if (p == node) {
                            return true;
                        }
                        p = p.parentNode;
                    }
                    return false;
                },

                /**
                 * Sorts this nodes children using the supplied sort function.
                 * @param {Function} fn A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.
                 * @param {Boolean} [recursive=false] True to apply this sort recursively
                 * @param {Boolean} [suppressEvent=false] True to not fire a sort event.
                 */
                sort : function(sortFn, recursive, suppressEvent) {
                    var cs  = this.childNodes,
                        ln = cs.length,
                        i, n;

                    if (ln > 0) {
                        Ext.Array.sort(cs, sortFn);
                        for (i = 0; i < ln; i++) {
                            n = cs[i];
                            n.previousSibling = cs[i-1];
                            n.nextSibling = cs[i+1];

                            if (i === 0) {
                                this.setFirstChild(n);
                            }
                            if (i == ln - 1) {
                                this.setLastChild(n);
                            }
                            n.updateInfo();
                            if (recursive && !n.isLeaf()) {
                                n.sort(sortFn, true, true);
                            }
                        }

                        if (suppressEvent !== true) {
                            this.fireEvent('sort', this, cs);
                        }
                    }
                },

                /**
                 * Returns true if this node is expaned
                 * @return {Boolean}
                 */
                isExpanded: function() {
                    return this.get('expanded');
                },

                /**
                 * Returns true if this node is loaded
                 * @return {Boolean}
                 */
                isLoaded: function() {
                    return this.get('loaded');
                },

                /**
                 * Returns true if this node is loading
                 * @return {Boolean}
                 */
                isLoading: function() {
                    return this.get('loading');
                },

                /**
                 * Returns true if this node is the root node
                 * @return {Boolean}
                 */
                isRoot: function() {
                    return !this.parentNode;
                },

                /**
                 * Returns true if this node is visible
                 * @return {Boolean}
                 */
                isVisible: function() {
                    var parent = this.parentNode;
                    while (parent) {
                        if (!parent.isExpanded()) {
                            return false;
                        }
                        parent = parent.parentNode;
                    }
                    return true;
                },

                /**
                 * Expand this node.
                 * @param {Boolean} [recursive=false] True to recursively expand all the children
                 * @param {Function} [callback] The function to execute once the expand completes
                 * @param {Object} [scope] The scope to run the callback in
                 */
                expand: function(recursive, callback, scope) {
                    var me = this;

                    // all paths must call the callback (eventually) or things like
                    // selectPath fail

                    // First we start by checking if this node is a parent
                    if (!me.isLeaf()) {
                        // If it's loaded, wait until it loads before proceeding
                        if (me.isLoading()) {
                            me.on('expand', function(){
                                me.expand(recursive, callback, scope);
                            }, me, {single: true});
                        } else {
                            // Now we check if this record is already expanding or expanded
                            if (!me.isExpanded()) {
                                // The TreeStore actually listens for the beforeexpand method and checks
                                // whether we have to asynchronously load the children from the server
                                // first. Thats why we pass a callback function to the event that the
                                // store can call once it has loaded and parsed all the children.
                                me.fireEvent('beforeexpand', me, function() {
                                    me.set('expanded', true);
                                    if (me.hasListeners.expand) {
                                        me.fireEvent('expand', me, me.childNodes, false);
                                    }

                                    // Call the expandChildren method if recursive was set to true
                                    if (recursive) {
                                        me.expandChildren(true, callback, scope);
                                    } else {
                                        Ext.callback(callback, scope || me, [me.childNodes]);
                                    }
                                }, me);
                            } else if (recursive) {
                                // If it is is already expanded but we want to recursively expand then call expandChildren
                                me.expandChildren(true, callback, scope);
                            } else {
                                Ext.callback(callback, scope || me, [me.childNodes]);
                            }
                        }
                    } else {
                        // If it's not then we fire the callback right away
                        Ext.callback(callback, scope || me); // leaf = no childNodes
                    }
                },

                /**
                 * Expand all the children of this node.
                 * @param {Boolean} [recursive=false] True to recursively expand all the children
                 * @param {Function} [callback] The function to execute once all the children are expanded
                 * @param {Object} [scope] The scope to run the callback in
                 */
                expandChildren: function(recursive, callback, scope) {
                    var me = this,
                        i = 0,
                        nodes = me.childNodes,
                        ln = nodes.length,
                        node,
                        expanding = 0;

                    for (; i < ln; ++i) {
                        node = nodes[i];
                        if (!node.isLeaf()) {
                            expanding++;
                            nodes[i].expand(recursive, function () {
                                expanding--;
                                if (callback && !expanding) {
                                    Ext.callback(callback, scope || me, [me.childNodes]);
                                }
                            });
                        }
                    }

                    if (!expanding && callback) {
                        Ext.callback(callback, scope || me, [me.childNodes]);                    }
                },

                /**
                 * Collapse this node.
                 * @param {Boolean} [recursive=false] True to recursively collapse all the children
                 * @param {Function} [callback] The function to execute once the collapse completes
                 * @param {Object} [scope] The scope to run the callback in
                 */
                collapse: function(recursive, callback, scope) {
                    var me = this;

                    // First we start by checking if this node is a parent
                    if (!me.isLeaf()) {
                        // Now we check if this record is already collapsing or collapsed
                        if (!me.collapsing && me.isExpanded()) {
                            me.fireEvent('beforecollapse', me, function() {
                                me.set('expanded', false);
                                if (me.hasListeners.collapse) {
                                    me.fireEvent('collapse', me, me.childNodes, false);
                                }

                                // Call the collapseChildren method if recursive was set to true
                                if (recursive) {
                                    me.collapseChildren(true, callback, scope);
                                }
                                else {
                                    Ext.callback(callback, scope || me, [me.childNodes]);
                                }
                            }, me);
                        }
                        // If it is is already collapsed but we want to recursively collapse then call collapseChildren
                        else if (recursive) {
                            me.collapseChildren(true, callback, scope);
                        }
                    }
                    // If it's not then we fire the callback right away
                    else {
                        Ext.callback(callback, scope || me, [me.childNodes]);
                    }
                },

                /**
                 * Collapse all the children of this node.
                 * @param {Function} [recursive=false] True to recursively collapse all the children
                 * @param {Function} [callback] The function to execute once all the children are collapsed
                 * @param {Object} [scope] The scope to run the callback in
                 */
                collapseChildren: function(recursive, callback, scope) {
                    var me = this,
                        i = 0,
                        nodes = me.childNodes,
                        ln = nodes.length,
                        node,
                        collapsing = 0;

                    for (; i < ln; ++i) {
                        node = nodes[i];
                        if (!node.isLeaf()) {
                            collapsing++;
                            nodes[i].collapse(recursive, function () {
                                collapsing--;
                                if (callback && !collapsing) {
                                    Ext.callback(callback, scope || me, [me.childNodes]);
                                }
                            });
                        }
                    }

                    if (!collapsing && callback) {
                        Ext.callback(callback, scope || me, [me.childNodes]);
                    }
                }
            };
        }
    }
});

Ext.define('natjs.overrides.Object', {
}, function() {

    Ext.Object.toQueryString = function(object, recursive) {
        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;

        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(Ext.Object.toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;

            if (Ext.isEmpty(value)) {
                value = '';
            }
            else if (Ext.isDate(value)) {
                value = value.toJSON();    //IZS
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    };

    Ext.Object.ReplaceKeyNames = function(object, searchValue, replaceValue) {
        var result = {};
        Ext.Object.each(object, function(key, value, myself){
            result[key.replace(searchValue, replaceValue)] = value;
        });
        return result;
    };

    Ext.Object.Flatten = function(object){
        function req(name, value, result){
            if (!Ext.isObject(value)) {
                result[name] = value;
            } else {
                for (var propName in value) {
                    if (value.hasOwnProperty(propName)) {
                        var propValue = value[propName];
                        if (name) propName = name + '.' + propName;
                        req(propName, propValue, result);
                    }
                }
            }
        }
        var result = {};
        req('', object, result);
        return result;
    };

    Ext.Object.FlattenOneLevel = function(object){
        var result = {};
        for (var propName in object) {
            if (!object.hasOwnProperty(propName)) continue;
            var propValue = object[propName];

            if (!Ext.isObject(propValue)) {
                result[propName] = propValue;
            } else {
                for (var subPropName in propValue) {
                    if (!propValue.hasOwnProperty(subPropName)) continue;
                    result[propName + '.' + subPropName] = propValue[subPropName];
                }
            }
        }
        return result;
    };

    Ext.Object.isEmpty = function(object) {
        for(var prop in object) {
            if(object.hasOwnProperty(prop))
                return false;
        }
        return true;
    };

    Ext.Object.isEqual = function(object1, object2){
        object1 = object1 || {};
        object2 = object2 || {};

        var p;
        for(p in object1) {
            if (!object1.hasOwnProperty(p)) continue;
            if(typeof(object2[p])=='undefined') {return false;}
        }

        for(p in object1) {
            if (!object1.hasOwnProperty(p)) continue;
            if (object1[p]) {
                switch(typeof(object1[p])) {
                    case 'object':
                        if (!Ext.Object.isEqual(object1[p], object2[p])) { return false; } break;
                    case 'function':
                        if (typeof(object2[p])=='undefined' ||
                            (p != 'equals' && object1[p].toString() != object2[p].toString()))
                            return false;
                        break;
                    default:
                        if (object1[p] != object2[p]) { return false; }
                }
            } else {
                if (object2[p])
                    return false;
            }
        }

        for(p in object2) {
            if (!object2.hasOwnProperty(p)) continue;
            if(typeof(object1[p])=='undefined') {return false;}
        }

        return true;
    };
});

Ext.define('natjs.overrides.String', {
}, function() {

    Ext.String.startsWith = function (str, value){
        if (!str) return false;
        return str.slice(0, value.length) == value;
    };

    Ext.String.endsWith = function (str, value){
        if (!str) return false;
        return str.slice(-value.length) == value;
    };

    Ext.String.removeFromStart = function (str, value){
        if (!str) return str;
        if (!Ext.String.startsWith(str, value)) return str;
        return str.slice(value.length);
    };

    Ext.String.removeFromEnd = function (str, value){
        if (!str) return str;
        if (!Ext.String.endsWith(str, value)) return str;
        return str.slice(0, str.length - value.length);
    };
});

Ext.define('NAT.panel.Abstract', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.natpanel',

    op: null,
    callback: null,
    scope: null,
    result: null,

    initComponent: function(){
        //before callParent bc it creates items (like grid) that needs stores created
        if (!this.designMode){
            this.initStores();
        }

        this.callParent(arguments);

        if (this.designMode) return;

        this.on('close', this.this_close, this);
    },

    initStores : function() {
        var me = this,
            stores = me.stores || [];

        me.stores = new Ext.util.AbstractMixedCollection();

        for (var i=0; stores.length>i; i++){
            var store = stores[i];
            var xtype = store.xtype;
            delete store.xtype;
            store = Ext.create('widget.' + xtype, store);
            me.stores.add(store.itemId, store);
        }
    },

    this_close: function() {
        Ext.callback(this.callback, this.scope, [null, this.result], 0);
    },

    showPanel: function(op, callback, scope) {
        this.op = op || {};
        this.callback = callback;
        this.scope = scope;
    },

    load: function(op, callback, scope) {
        var me = this;
        async.forEach(me.stores.getRange(), function(store, done){
                store.load(null, done, me);
        },
        function(data, err){
            Ext.callback(callback, scope, [err, null], 0);
        })
    },

    reject: function(){
        this.stores.each(function(store){
            store.reject();
        }, this)
    },

    save: function (op, callback, scope) {
        var me = this;
        async.forEach(me.stores.getRange(), function(store, done){
            store.save(null, done, me);
        },
        function(data, err){
            Ext.callback(callback, scope, [err, null], 0);
        })
    },

    refresh: function(op, callback, scope) {
        var me = this;
        async.forEach(me.stores.getRange(), function(store, done){
            store.reload(null, done, me);
        },
        function(data, err){
            Ext.callback(callback, scope, [err, null], 0);
        })
    },

    refreshUI: function(op) {
    }
});

Ext.define('NAT.panel.persistent.Abstract', {
    extend: 'NAT.panel.Abstract',
    alias: 'widget.natpersistentpanel',

    model: ''
});

Ext.define('NAT.panel.persistent.Form', {
    extend: 'NAT.panel.persistent.Abstract',
    alias: 'widget.natppform',

    store: null,

    initComponent: function(){
        this.callParent(arguments);

        if (this.designMode) return;

        this.store = this.stores.getAt(0);

//        this.down('#btnDelete').on('click', this.btnDelete_click, this);
        this.down('#btnSave').on('click', this.btnSave_click, this);
        this.down('#btnCancel').on('click', this.btnCancel_click, this);
//        this.down('#btnClose').on('click', this.btnClose_click, this);
    },

    showPanel: function(op, callback, scope) {
        this.callParent(arguments);

        Ext.applyIf(this.op, { command: 'new' });

        this[this.op.command + 'Mode'].apply(this, arguments);
    },

    newMode: function(op, callback, scope){
        //this.down('#btnDelete').setVisible(false);
        this.down('#btnSave').setVisible(true);
        this.down('#btnCancel').setVisible(true);
        //this.down('#btnClose').setVisible(false);

		this.store.createNew();
		this.down('#frmMain').FocusFirstField();
    },

    showMode: function(op, callback, scope){
        //this.down('#btnDelete').setVisible(false);
        this.down('#btnSave').setVisible(false);
        this.down('#btnCancel').setVisible(false);
        //this.down('#btnClose').setVisible(true);

        this.store.load({ params: { id: op.modelId }}, null, this);
    },

    modifyMode: function(op, callback, scope){
        this.down('#btnDelete').setVisible(false);
        this.down('#btnSave').setVisible(true);
        this.down('#btnCancel').setVisible(true);
        //this.down('#btnClose').setVisible(false);

        this.store.load({ params: { id: op.modelId }}, null, this);
    },

    deleteMode: function(op, callback, scope){
        //this.down('#btnDelete').setVisible(true);
        this.down('#btnSave').setVisible(false);
        this.down('#btnCancel').setVisible(true);
        //this.down('#btnClose').setVisible(false);

        this.store.load({ params: { id: op.modelId }}, null, this);
    },

    btnDelete_click: function(){
    },

    btnSave_click: function(){
        var me = this;
        async.waterfall([
            function(cb){
                me.save(null, cb, me);
            },
            function(result, cb){
                me.close();
                viewport.refresh(null, cb, me);
            }
        ]);
    },

    btnCancel_click: function(){
        this.reject();
		this.close();
	},

    btnClose_click: function(){
        this.close();
    },

    save: function (op, callback, scope) {
        this.store.save(op, callback, scope);
    },

    reject: function(){
        this.store.reject();
    },

    refresh: function(op, callback, scope) {
        this.store.reload(null, callback, scope);
    },

    refreshUI: function(op) {
        this.refreshToolbar();
    },

    refreshToolbar: function () {
    }
});

Ext.define('NAT.panel.persistent.Grid', {
    extend: 'NAT.panel.persistent.Abstract',
    alias: 'widget.natppgrid',

    store: null,

    initComponent: function(){
        this.callParent(arguments);

        if (this.designMode) return;

        this.store = this.stores.getAt(0);
        this.store.on('modeldirtychanged', this.store_modeldirtychanged, this);

		this.down('#btnSave').on('click', this.btnSave_click, this);
        this.down('#btnCancel').on('click', this.btnCancel_click, this);
    },

    showPanel: function(op, callback, scope) {
        this.callParent(arguments);
        this.store.load(null, null, this);
		this.refreshUI();
    },

	store_modeldirtychanged: function(){
        //this.refreshToolbar();
    },

    btnNew_click: function(){
        if (!this.model) return;
        var newModel = app.natCreateModel(this.model);
        this.store.add(newModel);
    },

    btnDelete_click: function(){
        var model = this.down('#gridMain').getSelected();
        this.store.remove(model);
    },

    btnSave_click: function(){
        var me = this;
        async.waterfall([
            function(cb){
                me.save(null, cb, me);
            },
            function(result, cb){
                me.refreshUI(null);
                viewport.refresh(null, cb, me);
            }
        ]);
    },

    btnCancel_click: function(){
        this.reject();
        this.refreshUI(null);
    },

    refreshUI: function(op) {
        this.refreshToolbar();
    },

    refreshToolbar: function () {
//		var hasModel = this.store.hasModel();
//		var changed = this.store.IsChanged();
//		this.down('#btnSave').setDisabled(!hasModel || !changed);
//		this.down('#btnCancel').setDisabled(!hasModel || !changed);
    }
});

Ext.define('NAT.panel.persistent.Tree', {
    extend: 'NAT.panel.persistent.Abstract',
    alias: 'widget.natpptree',

    store: null,

    initComponent: function(){
        this.callParent(arguments);

        if (this.designMode) return;

        this.store = this.stores.getAt(0);

        this.down('#treeMain').on('select', this.treeMain_select, this);
        this.down('#btnNew').on('click', this.btnNew_click, this);
        this.down('#btnDelete').on('click', this.btnDelete_click, this);
        this.down('#btnSave').on('click', this.btnSave_click, this);
        this.down('#btnCancel').on('click', this.btnCancel_click, this);
        this.down('#btnExpandAll').on('click', this.btnExpandAll, this);
    },

    showPanel: function(op, callback, scope) {
        this.callParent(arguments);
        this.store.load(null, null, this);
    },

    treeMain_select: function(){
        this.refreshToolbar();
    },

    btnNew_click: function(){
        if (!this.model) return;

        var tree = this.down('#treeMain');
        var me = this;
        async.waterfall([
            function(cb) {
                me.ensureRoot(null, cb, me);
            },
            function(result, cb){
                var parent = tree.getSelected() || me.store.getRootNode();
                var newModel = app.natCreateModel(me.model, { loaded: true });
                parent.appendChild(newModel);
                me.saveRefresh(null, cb, me);
            }
        ]);
    },

    btnDelete_click: function(){
        this.down('#treeMain').getSelected().remove();
        this.saveRefresh(null, null, this);
    },

    btnSave_click: function(){
        this.saveRefresh(null, null, this);
    },

    btnCancel_click: function(){
        this.reject();
        this.refreshUI(null);
    },

    btnExpandAll: function(){
        this.down('#treeMain').expandAll(null, this);
    },

    ensureRoot: function(op, callback, scope) {
        if (this.store.getRootNode()){
            Ext.callback(callback, scope, [null, null], 0);
            return;
        }
        var root = app.natCreateModel(this.model, { name: 'root', loaded: true });
        this.store.setRootNode(root);
        this.saveRefresh(null, callback, scope);
    },

    reject: function(){
        this.store.reject();
    },

    saveRefresh: function (op, callback, scope) {
        var me = this;
        async.waterfall([
            function(cb){
                me.save(null, cb, me);
            },
            function(result, cb){
                viewport.refresh(null, cb, me);
            }
        ],
        function(err, data) {
            Ext.callback(callback, scope, [err, null], 0);
        });
    },

    save: function (op, callback, scope) {
        this.store.save(op, callback, scope);
    },

    refresh: function(op, callback, scope) {
        this.store.reload(op, callback, scope);
    },

    refreshUI: function (op) {
        this.refreshToolbar();
    },

    refreshToolbar: function () {
        var tree = this.down('#treeMain');
        var model = tree.getSelected();

        this.down('#btnDelete').setDisabled(!model);
    }
});

Ext.define('NAT.panel.query.Abstract', {
    extend: 'NAT.panel.Abstract',
    alias: 'widget.natquerypanel',

    model: ''
});

Ext.define('NAT.panel.query.Grid', {
    extend: 'NAT.panel.query.Abstract',
    alias: 'widget.natpqgrid',

    formpanel: null,

    store: null,

    initComponent: function(){
        this.callParent(arguments);

        if (this.designMode) return;

        this.store = this.stores.getAt(0);

        this.down('#gridMain').on('select', this.gridMain_select, this);
        this.down('#btnShow').on('click', this.btnShow_click, this);
    },

    showPanel: function(op, callback, scope) {
        this.callParent(arguments);
        this.store.load(null, null, this);
    },

    gridMain_select: function(){
        this.refreshToolbar();
    },

    btnShow_click: function(){
        var grid = this.down('#gridMain');
        var model = grid.getSelected();
        viewport.showPanel({ panel: this.formpanel, command: 'show', modelId: model.getId() }, null, this);
    },

    refresh: function(op, callback, scope) {
        this.store.reload(op, callback, scope);
    },

    refreshUI: function(op) {
        this.refreshToolbar();
    },

    refreshToolbar: function () {
        var grid = this.down('#gridMain');
        var model = grid.getSelected();

        this.down('#btnShow').setDisabled(!model);
    }
});

Ext.define('NAT.toolbar.Command', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.natcommandtoolbar',

    mixins: {
        bindable: 'Ext.util.Bindable'
    },

    dataStore: null,
    dataMember: null,

    initComponent : function(){
        var me = this;

        this.dataStore = this.store;
        this.store = null;

        this.callParent(arguments);

        if (this.designMode) return;

        this.on('afterrender', this.this_afterRender, this, {single: true});

        this.down('#btnNew').on('click', this.btnNew_click, this);
        this.down('#btnDelete').on('click', this.btnDelete_click, this);
    },

    this_afterRender: function(){
        var dataStore = this.dataStore;
        this.dataStore = null;
        this.bindStore(dataStore, this.dataMember);
    },

    bindStore: function(dataStore, dataMember) {
        if (dataStore == this.dataStore && dataMember == dataMember) return;

        if (this.dataStore && this.dataMember) {
            this.dataStore.un('currentmodelchanged', this.dataStore_currentmodelchanged, this);
        }

        this.dataStore = dataStore;
        this.dataMember = dataMember;

        if (Ext.isString(this.dataStore)){
            //local store?
            var natpanel = this.up('natpanel');
            if (natpanel){
                this.dataStore = natpanel.stores.getByKey(this.dataStore);
            }
            //global store?
            if (!this.dataStore){
                this.dataStore = Ext.data.StoreManager.lookup(this.dataStore);
            }
        }

        if (this.dataStore && this.dataMember) {
            this.dataStore.on('currentmodelchanged', this.dataStore_currentmodelchanged, this);
        }

        if (this.dataStore && !this.dataMember) {
			this.mixins.bindable.bindStore.call(this, this.dataStore);
        }
    },

    dataStore_currentmodelchanged: function(currModel){
        var store = (currModel) ? currModel['hasMany_' + this.dataMember] : Ext.data.StoreManager.lookup('ext-empty-store');
        this.mixins.bindable.bindStore.call(this, store);
    },

    btnNew_click: function() {
        var store = this.getStore();
        if (store) store.createNew();
    },

    btnDelete_click: function() {
        var store = this.getStore();
        if (store) store.removeCurrent();
    }

//    getStoreListeners: function() {
//        return {
//            beforeload: this.beforeLoad,
//            load: this.onLoad,
//            exception: this.onLoadError
//        };
//    },

//    bindStore: function(store) {
//        this.bindStore(store);
//    }
});

Ext.define('NAT.view.MessageDialog', {
    extend: 'Ext.window.Window',
    alias: 'widget.natmessagedialog',

    width: 500,
    height: 250,
    resizable: false,
    closable: false,
    layout: {
        align: 'top',
        type: 'hbox'
    },
    modal: true,
    bodyPadding: 10,

    callback: null,
    scope: null,

    initComponent: function () {
        this.items = [
            {
                xtype: 'image',
                itemId: 'img',
                height: 70,
                width: 70,
                flex: 0
            },
            {
                xtype: 'component',
                itemId: 'lMessage',
                margin: '10 10 10 10',
                flex: 1
            }
        ];
        this.dockedItems = [
            {
                xtype: 'container',
                height: 50,
                cls: 'commandpanel',
                layout: {
                    align: 'stretch',
                    padding: 10,
                    type: 'hbox'
                },
                dock: 'bottom',
                defaults: {
                    flex: 1,
                    margin: '0 5',
                    hidden: true
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnSave',
                        ui: 'green',
                        text: 'Save',
                        result: 'save'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnDontSave',
                        ui: 'blue',
                        text: "Don't Save",
                        result: 'dontsave'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnOk',
                        ui: 'green',
                        text: 'Ok',
                        result: 'ok'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnYes',
                        ui: 'green',
                        text: 'Yes',
                        result: 'yes'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnNo',
                        ui: 'blue',
                        text: 'No',
                        result: 'no'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnCancel',
                        ui: 'gray',
                        text: 'Cancel',
                        result: 'cancel'
                    }
                ]
            }
        ];

        this.callParent(arguments);

        this.down('#btnSave').on('click', this.btn_click, this);
        this.down('#btnDontSave').on('click', this.btn_click, this);
        this.down('#btnOk').on('click', this.btn_click, this);
        this.down('#btnYes').on('click', this.btn_click, this);
        this.down('#btnNo').on('click', this.btn_click, this);
        this.down('#btnCancel').on('click', this.btn_click, this);
    },

    ShowModal: function (config, callback, scope) {
        this.callback = callback;
        this.scope = scope;

        config = config || {};
        config.type = config.type || 'success';
        config.msg = config.msg || '';

        var img = this.down('#img');
        var lMessage = this.down('#lMessage');

        var btnSave = this.down('#btnSave');
        var btnDontSave = this.down('#btnDontSave');
        var btnOk = this.down('#btnOk');
        var btnYes = this.down('#btnYes');
        var btnNo = this.down('#btnNo');
        var btnCancel = this.down('#btnCancel');

        if (config.type == 'message') {
            this.setTitle(config.type);
            img.setSrc('/natjs/resources/images/message.png');
            btnOk.setVisible(true);
        }
        if (config.type == 'success') {
            this.setTitle(config.type);
            img.setSrc('/natjs/resources/images/message.png');
            btnOk.setVisible(true);
        }
        else if (config.type == 'failure') {
            this.setTitle(config.type);
            img.setSrc('/natjs/resources/images/error.png');
            btnOk.setVisible(true);
        }
        else if (config.type == 'confirm') {
            this.setTitle(config.type);
            img.setSrc('/natjs/resources/images/warning.png');
            btnYes.setVisible(true);
            btnNo.setVisible(true);
        }
        else if (config.type == 'confirmexit') {
            this.setTitle('confirm');
            img.setSrc('/natjs/resources/images/warning.png');
            btnSave.setVisible(true);
            btnDontSave.setVisible(true);
            btnCancel.setVisible(true);
        }
        else if (config.type == 'error') {
            this.setTitle(config.type);
            img.setSrc('/natjs/resources/images/error.png');
            btnOk.setVisible(true);
        }
        else if (config.type == 'custom') {
            this.setTitle(config.title);
            img.setSrc('/natjs/resources/images/' + config.image + '.png');
            btnOk.setVisible(true);
            btnCancel.setVisible(true);
            btnOk.setText(config.okButtonText);
        }

        lMessage.html = config.msg;

        this.show();
    },

    btn_click: function (button) {
        Ext.callback(this.callback, this.scope, [null, { result: button.result }], 0); //by delay 0ms close happen first before callback!
        this.close();
    }
});

Ext.define('NAT.viewport.Abstract', {
    extend: 'Ext.container.Viewport'
});

Ext.define('NAT.viewport.MenuItem', {
    extend: 'Ext.menu.Item',
    alias: 'widget.natviewportmenuitem',

    panel: '',

    initComponent: function () {
        this.callParent(arguments);
        this.on('click', this.this_click, this);
    },

    this_click: function(){
        viewport.showPanel({ panel: this.panel }, null, this);
    }
});

Ext.define('NAT.viewport.Tabbed', {
    extend: 'NAT.viewport.Abstract',
    alias: 'widget.nattabbedviewport',

    initComponent: function () {
        this.callParent(arguments);
        this.down('#btnRefresh').on('click', this.btnRefresh_click, this);
    },

    showPanel: function(op, callback, scope) {
        var panel = Ext.create(op.panel, { closable: true });
        var tpMain = this.down('#tpMain');
        tpMain.add(panel);
        tpMain.setActiveTab(panel);
        panel.showPanel(op, callback, scope);
    },

    btnRefresh_click: function(){
        this.refresh(null, null, this);
    },

    refresh: function(op, callback, scope) {
        var me = this;
        async.parallel([
            function(cb) {
				async.forEach(Ext.data.StoreManager.getRange(), function(store, done){
					store.reload(null, done, me);
				},cb);
			},
			function(result, cb) {
				var tpMain = me.down('#tpMain');
				async.forEach(tpMain.items.getRange(), function(autopanel, done){
					autopanel.refresh(null, done, me);
				},cb);
            }
        ],
        function(err, data) {
            me.refreshUI(op);
            Ext.callback(callback, scope, [err, null], 1);
        });
    },

    refreshUI: function (op) {
    }
});

Ext.define('NAT.window.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.natwindow',

    isActivated: false,

    initComponent: function () {
        this.callParent(arguments);

        this.on('activate', this.this_activate, this);

        this.InitEditorsBinding();
        //        this.InitFieldsBinding();
    },

    this_activate: function(){
        if (this.isActivated) return;
        this.fireEvent('shown');
        this.isActivated = true;
    },

    InitEditorsBinding: function() {
        var editors = this.query('form');
        for (var i = 0; i < editors.length; i++) {
            var editor = editors[i];
            editor.InitBinding();
        }
    },
    //
    //    InitFieldsBinding: function() {
    //        var fields = this.query('[isFormField]');
    //        for (var i = 0; i < fields.length; i++) {
    //            var field = fields[i];
    //            field.InitBinding();
    //        }
    //    },

    FocusFirstField: function() {
        var fields = this.query('[isFormField]');
        if (fields.length > 0) {
            var field = fields[0];
            field.focus(true, 200);
        }
    },

    FocusFirstInvalidField: function() {
        var fields = this.query('[isFormField]');
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (field.hasErrors()) {
                field.focus(true, 200);
                return;
            }
        }
    },

    Refresh: function(op, callback, scope) {
        Ext.callback(callback, scope, [null, null], 0);
    },

    RebindUI: function () {
        this.InitEditorsBinding();
        //        this.InitFieldsBinding();
    },

    RefreshUI: function () {
    }
});

Ext.define('NAT.data.Model', {
    extend: 'Ext.data.Model',
    alias: 'widget.natdatamodel',

    fields: [
        { name: '_id', type: 'string' },
        { name: '_type', type: 'string' }
    ],

    fieldsInfo: [
    ],

	idgen: 'uuid',
    idProperty: '_id',
    state: null,
    isNATDirty: false,
    isNATValid: false,
    errors: null,

    skipFieldSetters: [], //this setter method wont be executed handle endless cycle

    constructor: function(data, id, raw) {
        this.callParent(arguments);
        this.errors = Ext.create('Ext.data.Errors');
//        this.set('type', this.$className); //it would run on loading!
    },

    Created: function() {
    },

    associationChanged: function(association){
		this.isNATValid = false; //call async ValidateModel to set true
		this.natUpdateDirty();
    },

	fieldChanged : function(modifiedFieldNames) {
		modifiedFieldNames = modifiedFieldNames || [];
		//console.log('afterEdit ' + this.$className + '   ' + modifiedFieldNames);

		this.isNATValid = false; //call async ValidateModel to set true
		this.natUpdateDirty();

		if (modifiedFieldNames.length > 0){
			var fieldName = modifiedFieldNames[0];
			var fnSet = 'set_' + fieldName;
			if (typeof this[fnSet] == "function") {
				if (Ext.Array.contains(this.skipFieldSetters, fieldName)) {
					Ext.Array.remove(this.skipFieldSetters, fieldName);
				} else {
					//don't use this.get(fieldName) here bc it runs the getter that can change the value
					Ext.callback(this[fnSet], this, [this[this.persistenceProperty][fieldName]], 1);
				}
			}
		}
	},

	natUpdateDirty: function () {
		var result = this.dirty;
		if (!result) {
			for (var i = 0; i < this.associations.length; i++) {
				var association = this.associations.items[i];
				if (association.IsChanged(this)) {
					result = true;
					break;
				}
			}
		}
		if (this.isNATDirty != result){
			this.isNATDirty = result;
			this.callStore('OnModelDirtyChanged', this);
		}
	},

	get: function(fieldName) {
        if (Ext.isObject(fieldName)) {
            return this.callParent(arguments);
        }

        var value;
        var fnGet = 'get_' + fieldName;
        if (typeof this[fnGet] == "function") {
            value = this[fnGet]();
        } else {
            value = this.callParent(arguments);
        }

        return value;
    },

	set: function (fieldName, newValue) {
		var modifiedFieldNames = this.callParent(arguments);
		if (!this.editing && modifiedFieldNames) {
			this.fieldChanged(modifiedFieldNames);
		}
		return modifiedFieldNames;
	},

	endEdit : function(silent, modifiedFieldNames){
		this.callParent(arguments);
		this.fieldChanged(modifiedFieldNames);
	},

	Merge: function(source) {
        this.set(source.data);
        for (var i = 0; i < this.associations.length; i++) {
            var association = this.associations.items[i];
            association.Merge(this, source);
        }
    },

    isNew: function () {
        return (this.get('_created') === null);
    },

    //support change event, reject associations
    reject: function (silent) {
        var me = this,
            modified = me.modified,
            field;

        for (field in modified) {
            if (modified.hasOwnProperty(field)) {
                if (typeof modified[field] != "function") {
                    me[me.persistenceProperty][field] = modified[field];
                }
            }
        }

        me.dirty = false;
        me.editing = false;
        me.modified = {};

        //IZS BEGIN
        for (var i = 0; i < this.associations.length; i++) {
            var association = this.associations.items[i];
            association.reject(this, silent);
        }
        this.natUpdateDirty();
        //IZS END

        if (silent !== true) {
            me.afterReject(); //it calls store afterReject...and store fires update event
        }
    },

    //commit associations
    commit : function(silent) {
        var me = this;

        me.phantom = me.dirty = me.editing = false;
        me.modified = {};

        //IZS BEGIN
        for (var i = 0; i < this.associations.length; i++) {
            var association = this.associations.items[i];
            association.commit(this, silent);
        }
        this.natUpdateDirty();
        //IZS END

        if (silent !== true) {
            me.afterCommit(); //it calls store afterCommit...and store fires update event
        }
    },

    ValidateField: function(field, callback, scope) {
        var fieldName = Ext.isString(field) ? field : field.name;

        var fieldErrors = this.errors.getByField(fieldName);
        for (var f = 0; fieldErrors.length > f; f++){
            this.errors.remove(fieldErrors[f]);
        }

        var validations = Ext.Array.filter(this.validations, function (validation) {
            return (validation.field === fieldName)
        }, this),
        validators  = Ext.data.validations,
        value = this.get(fieldName);

        for (var i = 0; validations.length > i; i++) {
            var validation = validations[i];

            var valid = validators[validation.type](validation, value);
            if (!valid) {
                this.errors.add({
                    field: fieldName,
                    message: validation.message || validators.getMessage(validation) || validators[validation.type + 'Message']
                });
            }
        }

        fieldErrors = this.errors.getByField(fieldName);

        if (fieldErrors.length > 0) {
            Ext.callback(callback, scope, [ fieldErrors, null ], 0);
            return;
        }

        var fnValidator = fieldName + '_validator';
        if (typeof this[fnValidator] == "function") {
            this[fnValidator](null, function(err, data) {
                if (err) {
                    this.errors.add({
                        field: fieldName,
                        message: err
                    });
                    Ext.callback(callback, scope, [ err, null ], 0);
                }
                else {
                    Ext.callback(callback, scope, [ null, null ], 0);
                }
            }, this);
        }
        else {
            Ext.callback(callback, scope, [ null, null ], 0);
        }
    },

    ValidateModel: function(op, callback, scope) {
        this.errors.removeAll();

        var me = this;
        async.forEachSeries(me.fields.items, function(field, cb) {
            me.ValidateField(field, function(err, data) {
                cb(null, null);
            }, me);
        },
        function(err){
            if (me.errors.isValid()) {
                me.isNATValid = true;
                Ext.callback(callback, scope, [null, null], 0);
            }
            else {
                me.isNATValid = false;
                Ext.callback(callback, scope, [me.errors, null], 0);
            }
        });
    },

    GetFieldInfo: function(fieldName) {
        for (var i = 0; i < this.fieldInfos.length; i++) {
            if (this.fieldInfos[i].name == fieldName) {
                return this.fieldInfos[i];
            }
        }
        return null;
    }
});

Ext.define('NAT.data.PersistentModel', {
    extend: 'NAT.data.Model',

    fields: [
        { name: '_created', type: 'date' },
        { name: '_modified', type: 'date' },
        { name: '_version', type: 'int' },
        { name: '_deleted', type: 'boolean' }
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.QueryModel', {
    extend: 'NAT.data.Model',

    fields: [
        { name: '_created', type: 'date' },
        { name: '_modified', type: 'date' },
        { name: '_version', type: 'int' },
        { name: '_deleted', type: 'boolean' }
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.RequestModel', {
    extend: 'NAT.data.Model',

    fields: [
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.ClientModel', {
    extend: 'NAT.data.Model',

    fields: [
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.ComponentModel', {
    extend: 'NAT.data.Model',

    fields: [
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.LookupModel', {
    extend: 'NAT.data.Model',

    fields: [
        { name: '_created', type: 'date' },
        { name: '_modified', type: 'date' },
        { name: '_version', type: 'int' },
        { name: '_deleted', type: 'boolean' }
    ],

    fieldsInfo: [
    ],

    constructor: function(data, id, raw) {
        this.callParent(arguments);
    }
});

Ext.define('NAT.data.proxy.Ajax', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'widget.natajaxproxy',

    requires: ['NAT.view.MessageDialog'],

    mergeClientRecords: true,

    constructor: function (config) {
        var defaultConfig = {
            type: 'ajax',
            model: 'NAT.data.Model',   //required!!! otherwise reader and writer cant be set!!!
            batchActions: false,
            reader: {
                type: 'json',
                root: 'data',
                messageProperty: 'message',
                extractData: function (root) {
                    var me = this,
                        records = [],
                        Model   = me.model,
                        length  = root.length,
                        convertedValues, node, record, i;

                    if (!root.length && Ext.isObject(root)) {
                        root = [root];
                        length = 1;
                    }

                    for (i = 0; i < length; i++) {
                        node = root[i];

                        //IZS: Support polimorphism (in case of constant array store on client (or QueryResult) we have no type field!)
                        if (node._type) {
                            var className = app.getModuleClassName(node._type, 'model');
                            if (me.model.$className != className) {
                                this.setModel(className); //Change proxy model!
                            }
                        }

                        //IZS: I need to create the type of model that I set above
                        // Create a record with an empty data object.
                        // Populate that data object by extracting and converting field values from raw data
                        //record = new Model(undefined, me.getId(node), node, convertedValues = {});
                        record = new me.model(undefined, me.getId(node), node, convertedValues = {});
                        //END IZS

                        // If the server did not include an id in the response data, the Model constructor will mark the record as phantom.
                        // We  need to set phantom to false here because records created from a server response using a reader by definition are not phantom records.
                        record.phantom = false;

                        // Use generated function to extract all fields at once
                        me.convertRecordData(convertedValues, node, record);

                        records.push(record);

                        if (me.implicitIncludes) {
                            me.readAssociated(record, node);
                        }
                    }

                    return records;
                },
                readAssociated: function(record, data) {
                    var associations = record.associations.items,
                        i = 0,
                        length = associations.length,
                        association, associationData;
                    for (; i < length; i++) {
                        association = associations[i];
                        associationData = data[association.name];
                        if (associationData) {
                            association.read(record, associationData);
                        }
                    }
                }
            },
            writer: {
                type: 'json',
                encode: false,
                listful: true,
                writeAllFields: true,
                getRecordData: function(record) {
                    var isPhantom = record.phantom === true,
                        writeAll = this.writeAllFields || isPhantom,
                        nameProperty = this.nameProperty,
                        fields = record.fields,
                        fieldItems = fields.items,
                        data = {},
                        clientIdProperty = record.clientIdProperty,
                        changes,
                        name,
                        field,
                        key,
                        f, fLen;

                    if (writeAll) {
                        fLen = fieldItems.length;

                        for (f = 0; f < fLen; f++) {
                            field = fieldItems[f];

                            if (field.persist) {
                                name       = field[nameProperty] || field.name;
                                data[name] = record.get(field.name);

                                //IZS: handle dateFormat
                                if (field.dateFormat && Ext.isDate(data[name]))
                                {
                                    data[name] = Ext.Date.format(data[name], field.dateFormat);
                                }
                                else if ((field.type) && (field.type.type == 'date'))
                                {
                                    if (data[name] != null) {
                                        data[name] = data[name].toJSON();
                                    } else {
                                        data[name] = null;
                                    }
                                }
                                //END IZS
                            }
                        }
                    } else {
                        // Only write the changes
                        changes = record.getChanges();
                        for (key in changes) {
                            if (changes.hasOwnProperty(key)) {
                                field      = fields.get(key);
                                name       = field[nameProperty] || field.name;
                                data[name] = changes[key];
                            }
                        }
                    }
                    if(isPhantom) {
                        if(clientIdProperty && operation && operation.records.length > 1) {
                            // include clientId for phantom records, if multiple records are being written to the server in one operation.
                            // The server can then return the clientId with each record so the operation can match the server records with the client records
                            data[clientIdProperty] = record.internalId;
                        }
                    } else {
                        // always include the id for non phantoms
                        data[record.idProperty] = record.getId();
                    }

                    this.writeAssociated(record, data);

                    return data;
                },
                writeAssociated: function(record, data) {
                    var associations = record.associations.items,
                        i = 0,
                        length = associations.length,
                        association, associationData;
                    for (; i < length; i++) {
                        association = associations[i];
                        association.write(record, data);
                    }
                }
            }
        };

        config = Ext.merge(defaultConfig, config);

        this.callParent([config]); //create proxy with model defined in config

        this.on('exception', this.this_exception, this);

        return this;
    },

    NATRequest: function(options, callback, scope) {
        var request = Ext.create('Ext.data.Request', {
            url      : options.url || app.baseUrl + 'request',
            method   : options.method || 'POST',
            timeout  : this.timeout,
            params   : options.params,
            jsonData : this.Serialize(options.jsonData),
            scope    : this,
            callback : this.NATCreateRequestCallback(options, callback, scope),
            preventLoadingMask: options.preventLoadingMask
        });

        if (!options.preventLoadingMask) {
            app.ShowLoadingMask();
        }

        Ext.Ajax.request(request);

        return request;
    },

    Serialize: function(value) {
        if (typeof value === 'undefined') return '';
        if (value.isModel) return this.SerializeModel(value);
        if (Ext.isArray(value)) return this.SerializeArray(value);
        if (Ext.isObject(value)) return this.SerializeObject(value);
        if (Ext.isBoolean(value)) return value;
        return this.SerializePrimitive(value);
    },

    SerializeObject: function(object) {
        for(var property in object) {
            if (!object.hasOwnProperty(property)) continue;
            var value = object[property];
            object[property] = this.Serialize(value);
        }
        return JSON.stringify(object);
    },
    SerializeModel: function(model) {
        return this.getWriter().getRecordData(model);
    },

    SerializePrimitive: function(value) {
        if(typeof value.toJSON == 'function') {
            return value.toJSON();
        } else {
            return value.toString();
        }
    },

    SerializeArray: function(array) {
        var result = [];
        Ext.Array.every(array, function(value) {
            result.push(this.Serialize(value));
            return true;
        }, this);
        return result;
    },

    NATCreateRequestCallback: function(options, callback, scope) {
        var me = this;

        return function(options, success, response) {
            me.NATProcessResponse(success, options, response, callback, scope);
        };
    },

    NATProcessResponse: function(success, options, response, callback, scope){
        if (!options.preventLoadingMask) {
            app.HideLoadingMask();
        }

        if (!success) {
            this.fireEvent('exception', this, response, null);
            return;
        }

        var result = Ext.decode(response.responseText);

        if (!result.success) {
            response.result = result;
            this.fireEvent('exception', this, response, null);
            Ext.callback(callback, scope, [{ message: 'error' }, result], 0);
        }
        else {
            Ext.callback(callback, scope, [null, result], 0);
        }
    },

    processResponse: function(success, operation, request, response, callback, scope){
        var me = this,
            reader,
            result;

        if (success === true) {
            reader = me.getReader();
            result = reader.read(me.extractResponseData(response));

            if (result.success !== false) {
                //see comment in buildRequest for why we include the response object here
                Ext.apply(operation, {
                    response: response,
                    resultSet: result
                });

                if (this.mergeClientRecords) {
                    operation.commitRecords(result.records);
                }
                operation.setCompleted();
                operation.setSuccessful();
            } else {
                operation.setException(result.message);
                me.fireEvent('exception', this, response, operation);
            }
        } else {
            me.setException(operation, response);
            me.fireEvent('exception', this, response, operation);
        }

        //this callback is the one that was passed to the 'read' or 'write' function above
        if (typeof callback == 'function') {
            callback.call(scope || me, operation);
        }

        me.afterRequest(request, success);
    },

    this_exception: function(proxy, response, operation, op){
        var msg, type;

        if (!operation) { //request error
            if (response.result) {
                msg = response.result.message;
                type = 'failure';
            } else {
                msg = response.responseText;
                type = 'error';
            }
        } else if (typeof operation.error == 'object') { //system error
            msg = operation.error.statusText;
            type = 'error';
        } else {
            msg = operation.error;
            type = 'failure';
        }

        var dlg = Ext.create('NAT.view.MessageDialog');
        dlg.ShowModal({
            type: type,
            msg: msg
        });
    }
});

Ext.define('NAT.data.Store', {
    extend: 'Ext.data.Store',
    alias: 'widget.natstore',

    requires: ['NAT.data.proxy.Ajax'],

    collection: null,
    currModel: null,
    saving: false,

    constructor: function (config) {
        config = config || {};
        Ext.applyIf(config, {
            model: 'NAT.data.Model',
            api: {
                read: app.baseUrl + 'data/read',
                create: app.baseUrl + 'data/create',
                update: app.baseUrl + 'data/update',
                destroy: app.baseUrl + 'data/destroy'
            },
            mergeClientRecords: false
        });
        this.proxy = Ext.create('NAT.data.proxy.Ajax', config);

        this.callParent([config]);

        this.on('datachanged', this.updateCurrModel, this);
    },

    getNewRecords: function() {
        return this.data.filterBy(this.filterNew).items;
    },
    getUpdatedRecords: function() {
        return this.data.filterBy(this.filterUpdated).items;
    },
    getNewRecordsAll: function() {
        return this.data.filterBy(this.filterNewAll).items;
    },
    getUpdatedRecordsAll: function() {
        return this.data.filterBy(this.filterUpdatedAll).items;
    },

    load: function (options, callback, scope) {
        var me = this;

        if (me.loading) {
            Ext.callback(callback, scope, [null, null], 0);
            return;
        }

        options = Ext.applyIf({
            callback: callback,
            scope: scope,
            addRecords: 'merge'
        }, options);

        options.params = options.params || {};
        options.params.lastModified = options.params.lastModified || new Date(0);
        options.params.collection = options.params.collection || this.collection;

        if (!options || !options.params || !options.params.collection){
			var message = 'store options not valid, storeId: ' + this.storeId;
			console.log(message);
            Ext.callback(callback, scope, [{ message: message }, null], 0);
            return;
        }

        return me.callParent([options]);
    },

    reload: function(options, callback, scope) {
        return this.load(Ext.apply(this.lastOptions, options), callback, scope);
    },

    onProxyLoad: function(operation) {
        var me = this,
            resultSet = operation.getResultSet(),
            records = operation.getRecords(),
            successful = operation.wasSuccessful();

        if (resultSet) {
            me.totalCount = resultSet.total;
        }

        if (successful) {
            me.loadRecords(records, operation);
        }

        me.loading = false;
        if (me.hasListeners.load) {
            me.fireEvent('load', me, records, successful);
        }

        //TODO: deprecate this event, it should always have been 'load' instead. 'load' is now documented, 'read' is not.
        //People are definitely using this so can't deprecate safely until 2.x
        if (me.hasListeners.read) {
            me.fireEvent('read', me, records, successful);
        }

//IZS make callback result data compatible with async library
//        Ext.callback(operation.callback, operation.scope || me, [records, operation, successful]);
        Ext.callback(operation.callback, operation.scope || me, [null, {records: records, operation: operation, successful: successful}]);
    },

    loadRecords: function(records, options) {
        var me     = this,
            i      = 0,
            length = records.length,
            start,
            addRecords,
            snapshot = me.snapshot;

        if (options) {
            start = options.start;
            addRecords = options.addRecords;
        }

        //IZS merge support lastModified
        if (addRecords === false) {
            delete me.snapshot;
            me.clearData(true);
            me.data.addAll(records);
        }
        else if (addRecords === true) {
            if (snapshot) {
                snapshot.addAll(records);
            }
            me.data.addAll(records);
        }
        else if (addRecords === 'merge'){
            me.MergeModels(records);
            for (i=0; i < records.length; i++) {
                var model = records[i];
                var _modified = model.get('_modified');
                if (_modified > this.lastOptions.params.lastModified) {
                    this.lastOptions.params.lastModified = _modified;
                }
            }
        }

        if (start !== undefined) {
            for (i=0; i < length; i++) {
                records[i].index = start + i;
                records[i].join(me);
            }
        } else {
            for (i=0; i < length; i++) {
                records[i].join(me);
            }
        }

        /*
         * this rather inelegant suspension and resumption of events is required because both the filter and sort functions
         * fire an additional datachanged event, which is not wanted. Ideally we would do this a different way. The first
         * datachanged event is fired by the call to this.add, above.
         */
        me.suspendEvents();

        if (me.filterOnLoad && !me.remoteFilter) {
            me.filter();
        }

        if (me.sortOnLoad && !me.remoteSort) {
            me.sort(undefined, undefined, undefined, true);
        }

        me.resumeEvents();
        me.fireEvent('datachanged', me);
        me.fireEvent('refresh', me);
    },

    save: function (op, callback, scope) {
        if (this.saving) {
            Ext.callback(callback, scope, [null, null], 0);
            return;
        }

        this.saving = true;

        var me = this;
        async.waterfall([
            function(cb){
                me.ValidateChangedModels(null, cb, me);
            },
            function(result, cb){
                var options = {
                    scope: me,
                    success: function(batch, options) {
                        cb(null, options);
                    },
                    failure: function(batch, options) {
                        cb('failure', options);
                    }
                };

                me.sync(options);

                if (!options.operations){
                    cb(null, options);
                    return;
                }

                if ((options.operations) && (!options.preventLoadingMask)) {
                    app.ShowLoadingMask();
                }
            }
        ],
        function(err, options) {
            me.saving = false;

            if (err) {
                alert("validation error, field: " + err.getAt(0).field);
            }

            options = options || {};
            if ((options.operations) && (!options.preventLoadingMask)) {
                app.HideLoadingMask();
            }

            Ext.callback(callback, scope, [null, options], 0);
        });
    },

    //overridden!!! (Server sends the modified models back here)
    onCreateRecords: function(records, operation, success) {
        if (!success) return;

        var sentRecords = operation.resultSet.records;

        for (var i= 0; i < sentRecords.length; ++i) {
            var record = sentRecords[i];
            var original = operation.records[i];
            if (original) {
                original.setId(record.getId());
            }
        }
    },

    //overridden!!! (Server sends the modified models back here)
    onUpdateRecords: function (records, operation, success) {
    },

    onDestroyRecords: function(records, operation, success){
        if (success) {
            this.removed = [];
        }
    },

    Merge: function(source) {
        /*remove models that are not exist in source*/
        var removed = [],
            count = this.getCount();
        for (var i = 0; i < count; i++) {
            var model = this.getAt(i);
            if (!source.getById(model.getId())) removed.push(model);
        }
        for (var j = 0; j < removed.length; j++) {
            this.remove(removed[j]);
        }

        this.MergeModels(source.getRange(0));
    },

    reject: function (silent) {
        var removedModels = this.getRemovedRecords();
        for (i = 0; i < removedModels.length; i++) {
            model = removedModels[i];
            this.add(model);
        }

        var updatedModels = this.getUpdatedRecordsAll();
        for (var i = 0; i < updatedModels.length; i++) {
            var model = updatedModels[i];
            model.reject(silent);
        }

        var newModels = this.getNewRecordsAll();
        for (i = 0; i < newModels.length; i++) {
            model = newModels[i];
            this.remove(model);
        }

        this.commit();
    },

    commit: function (silent) {
        this.removed = [];

        var changedModels = this.GetChangedModelsAll();
        var count = changedModels.length;

        for (var i = 0; i < count; i++) {
            var model = changedModels[i];
            model.commit(silent);
        }
    },

    MergeModels: function (models) {
        for (var i = 0; i < models.length; i++) {
            this.MergeModel(models[i]);
        }
    },

    MergeModel: function (model) {
        var _deleted = model.get('_deleted');
        var original = this.getById(model.getId());
        if (_deleted) { //removed node
            if (original) {
                this.deleteRecord(original);
            }
            return true;
        }

        if (!original) {  //new node
            this.add(model);
            return true;
        }

        //updated node
        original.beginEdit();
        original.Merge(model);
        original.endEdit(true);
        original.commit();
        return true;
    },

    //nat method: original remove method put the record in the removed array and sync
    //this method is used in timestamp refreshing
    deleteRecord: function(record) {
        var index = this.data.indexOf(record);
        if (this.snapshot) {
            this.snapshot.remove(record);
        }
        record.unjoin(this);
        this.data.remove(record);
        this.remove(record);
        this.fireEvent('remove', this, record, index);
        this.fireEvent('datachanged', this);
    },

	createNew: function(model, config){
		model = app.natCreateModel(model || this.model, config);
        this.add(model);
        this.Select(model);
		return model;
    },

    removeCurrent: function(){
        if (!this.currModel) return;
        this.remove(this.currModel);
        this.updateCurrModel();
    },

    removeAll: function(silent) {
        this.callParent(arguments);
        this.Select(null);
    },

    updateCurrModel: function() {
        if (this.currModel) return;
        this.Select(this.getAt(0));
    },

    filterNew: function(item) {
        return (item.isNew() && item.isNATValid);
    },
    filterNewAll: function(item) {
        return item.isNew();
    },
    filterUpdated: function(item) {
        return (!item.isNew() && item.isNATDirty && item.isNATValid);
    },
    filterUpdatedAll: function(item) {
        return (!item.isNew() && item.isNATDirty);
    },

    GetChangedModels: function () {
        return Ext.Array.union(this.getNewRecords(), this.getUpdatedRecords(), this.getRemovedRecords());
    },
    GetChangedModelsAll: function () {
        return Ext.Array.union(this.getNewRecordsAll(), this.getUpdatedRecordsAll(), this.getRemovedRecords());
    },

    IsChanged: function () {
        return (this.GetChangedModelsAll().length != 0);
    },

    ValidateChangedModels: function(op, callback, scope) {
        async.forEach(this.GetChangedModelsAll(), function(model, done) {
            model.ValidateModel(null, done, model);
        },
        function(err){
            Ext.callback(callback, scope, [err, null], 0);
        });
    },

    Select: function (model, suppressEvent) {
        if (this.currModel == model) return;

        if (!suppressEvent) {
            this.OnSelect(this.currModel, model);
        }

        this.currModel = model;

        if (!suppressEvent) {
            this.OnCurrentModelChanged();
        }
    },

    Deselect: function (suppressEvent) {
        if (this.loading) return;
        if (this.currModel == null) return;

        if (!suppressEvent) {
            this.OnDeselect(this.currModel);
        }

        this.currModel = null;

        if (!suppressEvent) {
            this.OnCurrentModelChanged();
        }
    },

    hasModel: function() {
        return ((this.currModel) && (typeof this.currModel == 'object'));
    },

    OnSelect: function(oldModel, newModel) {
        this.fireEvent('select', oldModel, newModel);
    },

    OnDeselect: function(oldModel) {
        this.fireEvent('deselect', oldModel);
    },

    //model calls it from callStore
    OnModelDirtyChanged: function (model){
        this.fireEvent('modeldirtychanged', model);
    },

    OnCurrentModelChanged: function () {
        this.fireEvent('currentmodelchanged', this.currModel);
    }
});

Ext.define('NAT.data.TreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'widget.nattreestore',

    requires: ['NAT.data.proxy.Ajax'],

    collection: null,
    currModel: null,
    saving: false,

    constructor: function (config) {
        config = config || {};
        Ext.applyIf(config, {
            model: 'NAT.data.Model',
            api: {
                read: app.baseUrl + 'data/read',
                create: app.baseUrl + 'data/create',
                update: app.baseUrl + 'data/update',
                destroy: app.baseUrl + 'data/destroy'
            },
            mergeClientRecords: false
        });
        this.proxy = Ext.create('NAT.data.proxy.Ajax', config);

        this.callParent([config]);

        this.on('move', this.OnMove, this);

        this.on('datachanged', this.onDataChanged, this);
    },

    getNewRecords: function() {
        return Ext.Array.filter(this.tree.flatten(), this.filterNew);
    },
    getUpdatedRecords: function() {
        return Ext.Array.filter(this.tree.flatten(), this.filterUpdated);
    },
    getNewRecordsAll: function() {
        return Ext.Array.filter(this.tree.flatten(), this.filterNewAll);
    },
    getUpdatedRecordsAll: function() {
        return Ext.Array.filter(this.tree.flatten(), this.filterUpdatedAll);
    },

    onDataChanged: function() {
        this.updateCurrModel();
    },

    load: function (options, callback, scope) {
        var me = this;

        if (me.loading) {
            Ext.callback(callback, scope, [null, null], 0);
            return;
        }

        options = Ext.applyIf({
            callback: callback,
            scope: scope,
            addRecords: 'merge'
        }, options);

        options.params = options.params || {};
        options.params.lastModified = options.params.lastModified || new Date(0);
        options.params.collection = options.params.collection || this.collection;

        if (!options || !options.params || !options.params.collection){
            Ext.callback(callback, scope, [{ message: 'options not valid' }, null], 0);
            return;
        }

        //Ignore Ext.data.TreeStore load method
        return this.superclass.superclass.load.call(this, options);
    },

    reload: function(options, callback, scope) {
        return this.load(Ext.apply(this.lastOptions, options), callback, scope);
    },

    onProxyLoad: function (operation) {
        var me = this,
            successful = operation.wasSuccessful(),
            records = operation.getRecords();

        me.loading = false;
        if (successful) {
            var firstLoad = this.lastOptions.params.lastModified.getTime() == new Date(0).getTime();
            if (firstLoad) {
                this.BuildStore(records);
            }
            else {
                this.MergeModels(records);
            }

            for (i=0; i < records.length; i++) {
                var model = records[i];
                var _modified = model.get('_modified');
                if (_modified > this.lastOptions.params.lastModified) {
                    this.lastOptions.params.lastModified = _modified;
                }
            }
        }

        me.fireEvent('read', me, operation.node, records, successful);
        me.fireEvent('load', me, operation.node, records, successful);

//IZS make callback result data compatible with async library
//        Ext.callback(operation.callback, operation.scope || me, [records, operation, successful]);
        Ext.callback(operation.callback, operation.scope || me, [null, {records: records, operation: operation, successful: successful}]);
    },

    save: function (op, callback, scope) {
        if (this.saving) {
            Ext.callback(callback, scope, [null, null], 0);
            return;
        }

        this.saving = true;

        var me = this;
        async.waterfall([
            function(cb){
                me.ValidateChangedModels(null, cb, me);
            },
            function(result, cb){
                var options = {
                    scope: me,
                    success: function(batch, options) {
                        cb(null, options);
                    },
                    failure: function(batch, options) {
                        cb('failure', options);
                    }
                };

                me.sync(options);

                if (!options.operations){
                    cb(null, options);
                    return;
                }

                if ((options.operations) && (!options.preventLoadingMask)) {
                    app.ShowLoadingMask();
                }
            }
        ],
        function(err, options) {
            me.saving = false;

            if (err) {
                alert("validation error, field: " + err.getAt(0).field);
            }

            options = options || {};
            if ((options.operations) && (!options.preventLoadingMask)) {
                app.HideLoadingMask();
            }

            Ext.callback(callback, scope, [null, options], 0);
        });
    },

    //overridden!!! (Server sends the modified models back here)
    onCreateRecords: function(records, operation, success) {
        if (!success) return;

        var sentRecords = operation.resultSet.records;

        for (var i= 0; i < sentRecords.length; ++i) {
            var record = sentRecords[i];
            var original = operation.records[i];
            if (original) {
                this.tree.unregisterNode(original, false);
                original.setId(record.getId());
                this.tree.registerNode(original, false);
            }
        }
    },

    //overridden!!! (Server sends the modified models back here)
    onUpdateRecords: function (records, operation, success) {
    },

    onDestroyRecords: function(records, operation, success){
        if (success) {
            this.removed = [];
        }
    },

    remove: function (model, destroy) {
        if (!model.parentNode) return;
        model.parentNode.removeChild(model, destroy);
    },

    reject: function (silent) {
        var changedModels = this.GetChangedModelsAll();
        var count = changedModels.length;

        for (var i = 0; i < count; i++) {
            var model = changedModels[i];
            if (model.get('loaded')) {
                model.reject(silent);
            }
            else {
                model.isReplace = true;
                model.parentNode.removeChild(model);
                model.isReplace = false;
            }
        }
        this.commit();
    },

    commit: function (silent) {
        var changedModels = this.GetChangedModelsAll();
        var count = changedModels.length;

        for (var i = 0; i < count; i++) {
            var model = changedModels[i];
            model.commit(silent);
        }
    },

    BuildStore: function (models) {
//        this.removeAll();

        var result = this.GetChildByParentId(models, '');
        if (result.length != 1) {
            //alert('No Root!');
            return;
        }
        var rootModel = result[0];
        rootModel.beginEdit();
        rootModel.set('loaded', true);  //for Extjs compatibility
        this.setRootNode(rootModel);
        rootModel.endEdit(true);
        rootModel.commit();

        this.BuildStoreReq(models, rootModel);

        this.builded = true;
    },

    BuildStoreReq: function (models, parentNode) {
        var children = this.GetChildByParentId(models, parentNode.getId());
        if (children.length == 0) return;

        children.sort(function (a, b) { return a.get('index') - b.get('index'); });

        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.beginEdit();
            child.set('loaded', true);  //for Extjs compatibility
            if (!child.get('_deleted')) {
                parentNode.beginEdit();
                parentNode.appendChild(child);
                parentNode.endEdit(true);
                parentNode.commit();
                this.BuildStoreReq(models, child);
            }
            child.endEdit(true);
            child.commit();
        }
    },

    GetChildByParentId: function (models, parentId) {
        var result = [];

        for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (model.get('parentId') == parentId) {
                result[result.length] = model;
            }
        }

        return result;
    },

    MergeModels: function (models) {
        models.sort(function (a, b) { return a.get('index') - b.get('index'); });
        for (var i = 0; i < models.length; i++) {
            models[i].merged = false;
        }
        var mergedModelsCount = this.GetMergedModelsCount(models);
        while (mergedModelsCount < models.length) {
            for (i = 0; i < models.length; i++) {
                var model = models[i];
                if (model.merged) continue;
                if (this.MergeModel(model)) {
                    model.merged = true;
                }
            }

            var newMergedModelsCount = this.GetMergedModelsCount(models);
            if (newMergedModelsCount == mergedModelsCount) break; //prevent infinite loop!
            mergedModelsCount = newMergedModelsCount;
        }
    },

    GetMergedModelsCount: function (models) {
        var result = 0;
        for (var i = 0; i < models.length; i++) {
            if (models[i].merged) {
                result += 1;
            }
        }
        return result;
    },

    MergeModel: function (model) {
        var parentId = model.get('parentId'),
            index = model.get('index'),
            _deleted = model.get('_deleted');

        if (!parentId) { //root node
            var root = this.getRootNode();
            root.beginEdit();
            Ext.apply(model.data, {
                root: true,
                isFirst: true,
                isLast: true,
                depth: 0,
                expanded: root.get('expanded'),
                loaded: true //for Extjs compatibility
            });
            root.Merge(model);
            root.endEdit(true);
            root.commit();
            return true;
        }

        var parent = this.tree.getNodeById(parentId);
        if (!parent) return false; //merge the parent first

        var nodeBefore = parent.getChildAt(index);

        var original = this.tree.getNodeById(model.getId());
        if (_deleted) { //removed node
            if (original) {
                original.isReplace = true; //prevent being added to the removed cache
                original.parentNode.removeChild(original);
                original.isReplace = false;
            }
            return true;
        }

        if (!original) {  //new node
            Ext.data.NodeInterface.decorate(model);
			model.beginEdit();
            parent.insertBefore(model, nodeBefore);
            parent.updateInfo(false); //it updates children's indexes recursively
			model.set('loaded', true); //for Extjs compatibility
			model.endEdit(true);
			model.commit();
            return true;
        }

        //updated node
        if ((original.get('parentId') == parentId) &&
            (original.get('index') == index)) {
            original.beginEdit();
            Ext.apply(model.data, {
                root: false,
                isFirst: original.get('isFirst'),
                isLast: original.get('isLast'),
                depth: original.get('depth'),
                expanded: original.get('expanded'),
                loaded: true //for Extjs compatibility
            });
            original.Merge(model);
            original.endEdit(true);
            original.commit();
            return true;
        }

        //updated node changed parent or index
        original.beginEdit();
        original.isReplace = true; //prevent being added to the removed cache
        original.parentNode.removeChild(original);
        original.isReplace = false;

        Ext.apply(model.data, {
            loaded: true //for Extjs compatibility
        });
        original.Merge(model);

        parent.insertBefore(original, nodeBefore);
        parent.updateInfo(false); //it updates children's indexes recursively

        original.endEdit(true);
        original.commit();

        return true;
    },

	//not push new records into removed[]
	onNodeRemove: function(parent, node, isMove) {
		var me = this,
			removed = me.removed;

		if (!node.isReplace && Ext.Array.indexOf(removed, node) == -1) {
			if (!node.isNew()) removed.push(node);
		}

		if (me.autoSync && !me.autoSyncSuspended && !isMove) {
			me.sync();
		}
	},

    OnMove: function (model, oldParent, newParent) {
        if (oldParent != newParent) {
            oldParent.updateInfo(false);
        }
        newParent.updateInfo(false);
    },

	createNew: function(model, config){
		var parent = this.getCurrModel();
		model = app.natCreateModel(model || this.model, Ext.apply(config, {loaded: true}));
		parent.appendChild(model);
		this.Select(model);
		return model;
	},

	removeCurrent: function(){
		if (!this.currModel) return;
		this.remove(this.currModel);
		this.updateCurrModel();
	},

	removeAll: function(silent) {
		this.callParent(arguments);
		this.Select(null);
	},

    setRootNode: function(root, /* private */ preventLoad) {
        var me = this,
            model = me.model,
            idProperty = model.prototype.idProperty

        root = root || {};
        if (!root.isModel) {
            // create a default rootNode and create internal data struct.
            Ext.applyIf(root, {
                id: me.defaultRootId,
                text: 'Root',
                allowDrag: false
            });
            if (root[idProperty] === undefined) {
                root[idProperty] = me.defaultRootId;
            }
            Ext.data.NodeInterface.decorate(model);
            root = Ext.ModelManager.create(root, model);
        } else if (root.isModel && !root.isNode) {
            Ext.data.NodeInterface.decorate(model);
        }

        //IZS: to force decoration in setRootNode, appendChild ect:
        Ext.data.NodeInterface.decorate(root);
        //IZS end


        // Because we have decorated the model with new fields,
        // we need to build new extactor functions on the reader.
        me.getProxy().getReader().buildExtractors(true);

        // When we add the root to the tree, it will automaticaly get the NodeInterface
        me.tree.setRootNode(root);

//IZS begin
//        if (preventLoad !== true && !root.isLoaded() && (me.autoLoad === true || root.isExpanded())) {
//            me.load({
//                node: root
//            });
//        }

        root.join(this);
		this.Select(root, true);
//IZS end

        return root;
    },

    filterNew: function(item) {
        return (item.isNew() && item.isNATValid);
    },
    filterNewAll: function(item) {
        return item.isNew();
    },
    filterUpdated: function(item) {
        return (!item.isNew() && item.isNATDirty && item.isNATValid);
    },
    filterUpdatedAll: function(item) {
        return (!item.isNew() && item.isNATDirty);
    },

    GetChangedModels: function () {
        return Ext.Array.union(this.getNewRecords(), this.getUpdatedRecords(), this.getRemovedRecords());
    },
    GetChangedModelsAll: function () {
        return Ext.Array.union(this.getNewRecordsAll(), this.getUpdatedRecordsAll(), this.getRemovedRecords());
    },

    IsChanged: function () {
        return (this.GetChangedModelsAll().length != 0);
    },

    ValidateChangedModels: function(op, callback, scope) {
        async.forEach(this.GetChangedModelsAll(), function(model, done) {
            model.ValidateModel(null, done, model);
        },
        function(err){
            Ext.callback(callback, scope, [err, null], 0);
        });
    },

    Select: function (model, suppressEvent) {
		if (!model){
			model = this.getRootNode();
		}

        if (this.currModel == model) return;

        if (!suppressEvent) {
            this.OnSelect(this.currModel, model);
        }

        this.currModel = model;

        if (!suppressEvent) {
            this.OnCurrentModelChanged();
        }
    },

    Deselect: function (suppressEvent) {
        if (this.loading) return;
        if (this.currModel == null) return;

        if (!suppressEvent) {
            this.OnDeselect(this.currModel);
        }

        this.currModel = null;

        if (!suppressEvent) {
            this.OnCurrentModelChanged();
        }
    },

    hasModel: function() {
        return ((this.currModel) && (typeof this.currModel == 'object'));
    },

	getCurrModel: function() {
		if (this.hasModel()){
			return this.currModel;
		}

		this.updateCurrModel();

		if (this.hasModel()){
			return this.currModel;
		}
		return null;
	},

	updateCurrModel: function() {
		if (this.currModel) return;
		this.Select(null);
	},

	OnSelect: function(oldModel, newModel) {
        this.fireEvent('select', oldModel, newModel);
    },

    OnDeselect: function(oldModel) {
        this.fireEvent('deselect', oldModel);
    },

    //model calls it from callStore
    OnModelDirtyChanged: function (model){
        this.fireEvent('modeldirtychanged', model);
    },

    OnCurrentModelChanged: function () {
        this.fireEvent('currentmodelchanged', this.currModel);
    }
});

Ext.define('NAT.data.StoreManager', {
    extend: 'Ext.util.MixedCollection',
    alias: 'widget.natstoremanager',

    constructor: function (config) {
        this.callParent([config]);
    },

    Init: function () {
    },

    Activate: function(storeName) {
        var store = this.getByKey(storeName);
        store.active = true;
    },

    Deactivate: function(storeName) {
        var store = this.getByKey(storeName);
        store.active = false;
    },

    load: function (op, callback, scope) {
        async.forEach(this.items, function(store, done){
            if (store.active) {
                store.load(null, done);
            } else {
                done(null, null);
            }
        },
        function(err, data) {
            Ext.callback(callback, scope, [err, null], 0);
        });
    },

    reload: function (op, callback, scope) {
        async.forEach(this.items, function(store, done){
            if (store.active) {
                store.reload(null, done);
            } else {
                done(null, null);
            }
        },
        function(err, data) {
            Ext.callback(callback, scope, [err, null], 0);
        });
    }
});


