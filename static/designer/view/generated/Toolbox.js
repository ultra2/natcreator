Ext.define('designer.view.generated.Toolbox', { 
	extend: 'Ext.tab.Panel',
	alias: 'widget.Toolbox',
	
	tabBar: {	
	    baseCls: 'toolboxTabBar'	
	},
	itemCls: 'toolboxItems',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
		});
		me.callParent(arguments);
	}
});
