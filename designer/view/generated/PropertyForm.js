Ext.define('designer.view.generated.PropertyForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.PropertyForm',
	
	layout: {
		type: 'vbox',		
		align: 'stretch'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'PropertyTree',					
					itemId: 'propertytree',					
					flex: 1,					
					animate: false,					
					sortableColumns: false,					
					hideHeaders: true,					
					forceFit: true					
				},				
				{
					xtype: 'panel',					
					itemId: 'pnlCommands',					
					bodyStyle: 'background:lightgray',					
					height: 5					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
