Ext.define('natcreator.view.AccountSettingsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.AccountSettingsWindow',
	
	height: 300,
	layout: {
		type: 'anchor'		
	},
	modal: true,
	resizable: false,
	title: 'Account Settings',
	
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
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
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
							xtype: 'nattextfield',							
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
