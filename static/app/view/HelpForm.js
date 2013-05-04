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
							dataStore: 'stProjectTutorials',							
							fieldLabel: 'Topic',							
							itemId: 'luTopic',							
							labelWidth: 50,							
							width: 500							
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
