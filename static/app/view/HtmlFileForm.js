Ext.define('natcreator.view.HtmlFileForm', { 
	extend: 'NAT.panel.Panel',
	alias: 'widget.HtmlFileForm',
	
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
					xtype: 'nathtmleditor',					
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
