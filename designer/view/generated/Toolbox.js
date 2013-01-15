Ext.define('designer.view.generated.Toolbox', { 
	extend: 'NAT.tab.Panel',
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
