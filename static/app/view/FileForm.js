Ext.define('natcreator.view.FileForm', { 
	extend: 'NAT.panel.Panel',
	alias: 'widget.FileForm',
	
	closable: true,
	layout: {
		type: 'fit'		
	},
	preventHeader: true,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natsourceedit',					
					dataField: 'content',					
					dataStore: 'store',					
					itemId: 'srcContent'					
				}				
			],			
			stores: [
				{
					xtype: 'natclientstore',					
					dataModel: 'CDFile',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
