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
							dataStore: 'aa891bb6-4a71-4523-ad38-e8fc8bf3a82b',							
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
