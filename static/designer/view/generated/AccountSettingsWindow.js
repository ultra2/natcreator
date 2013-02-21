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
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						minWidth: 100					
					},					
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
							itemId: 'btnClose',							
							text: 'Close',							
							ui: 'blue'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'container',					
					itemId: 'contHeroku',					
					margin: '50 10',					
					items: [
						{
							xtype: 'textfield',							
							allowBlank: false,							
							fieldLabel: 'Heroku Api Key',							
							itemId: 'txtHerokuApiKey',							
							margin: '10',							
							width: 400							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnSetHerokuApiKey',							
							margin: '10',							
							text: 'Set',							
							ui: 'green',							
							width: 50							
						}						
					],					
					layout: {
						type: 'hbox',						
						align: 'middle'						
					}					
				},				
				{
					xtype: 'container',					
					defaults: {					
						margin: '10'					
					},					
					itemId: 'contGithub',					
					margin: '50 10',					
					items: [
						{
							xtype: 'natbutton',							
							autoWidth: true,							
							itemId: 'btnAllowAccessToGithub',							
							text: 'Allow access to Github',							
							ui: 'green'							
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
