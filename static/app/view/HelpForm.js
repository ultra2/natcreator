Ext.define('natcreator.view.HelpForm', { 
	extend: 'NAT.panel.Panel',
	alias: 'widget.HelpForm',
	
	layout: {
		type: 'fit'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					defaults: {					
						margin: 5					
					},					
					dock: 'top',					
					height: 35,					
					itemId: 'contHeader',					
					items: [
						{
							xtype: 'natlookupfield',							
							dataStore: 'f013eccc-40a0-4ce0-a69d-cf3fa1c7fdce',							
							fieldLabel: 'Topic',							
							itemId: 'luTopic',							
							labelWidth: 50							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'container',					
					itemId: 'contHtml'					
				}				
			],			
			stores: [
				{
					xtype: 'natstore',					
					collection: 'QRProjectTutorial',					
					itemId: 'stProjectTutorials'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
