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
							dataStore: '2a49f3e7-6156-4453-b593-01f55d76440e',							
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
					autoEl: {					
						tag: "iframe",					
						src: "about:blank"					
					},					
					autoScroll: true,					
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
