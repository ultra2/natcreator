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
					height: 70,					
					itemId: 'contHeader',					
					items: [
						{
							xtype: 'natcombobox',							
							fieldLabel: 'Topic',							
							itemId: 'cbTopic',							
							labelWidth: 50							
						},						
						{
							xtype: 'natlookupfield',							
							fieldLabel: 'Topic',							
							itemId: 'luTopic',							
							labelWidth: 50,							
							store: 'stProjectTutorials'							
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
