Ext.define('natcreator.view.Toolbox', { 
	extend: 'Ext.tab.Panel',
	alias: 'widget.Toolbox',
	
	itemCls: 'toolboxItems',
	tabBar: {	
	    baseCls: 'toolboxTabBar'	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
		});
		me.callParent(arguments);
	}
});
