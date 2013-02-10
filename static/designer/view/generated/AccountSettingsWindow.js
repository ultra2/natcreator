Ext.define('designer.view.generated.AccountSettingsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.AccountSettingsWindow',
	
	layout: {
		type: 'anchor'		
	},
	title: 'Account Settings',
	modal: true,
	resizable: false,
	height: 300,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5',					
						minWidth: 100					
					},					
					cls: 'commandpanel',					
					dock: 'bottom',					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							ui: 'blue',							
							text: 'Close',							
							itemId: 'btnClose'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'container',					
					margin: '50 10',					
					itemId: 'contHeroku',					
					items: [
						{
							xtype: 'textfield',							
							margin: '10',							
							width: 400,							
							fieldLabel: 'Heroku Api Key',							
							itemId: 'txtHerokuApiKey',							
							allowBlank: false							
						},						
						{
							xtype: 'natbutton',							
							width: 50,							
							margin: '10',							
							ui: 'green',							
							text: 'Set',							
							itemId: 'btnSetHerokuApiKey'							
						}						
					],					
					layout: {
						type: 'hbox',						
						align: 'middle'						
					}					
				},				
				{
					xtype: 'container',					
					itemId: 'contGithub',					
					margin: '50 10',					
					defaults: {					
						margin: '10'					
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnAllowAccessToGithub',							
							text: 'Allow access to Github',							
							ui: 'green',							
							autoWidth: true							
						},						
						{
							xtype: 'label',							
							itemId: 'lGihubInfo',							
							text: 'Waiting for information...'							
						}						
					],					
					layout: {
						type: 'hbox',						
						align: 'middle'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
