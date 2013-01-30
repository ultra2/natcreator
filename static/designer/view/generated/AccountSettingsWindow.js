Ext.define('designer.view.generated.AccountSettingsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.AccountSettingsWindow',
	
	height: 300,
	resizable: false,
	modal: true,
	title: 'Account Settings',
	layout: {
		type: 'anchor'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					dock: 'bottom',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						minWidth: 100					
					},					
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
							itemId: 'txtHerokuApiKey',							
							fieldLabel: 'Heroku Api Key',							
							width: 500,							
							margin: '10'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnSetHerokuApiKey',							
							text: 'Set',							
							ui: 'green',							
							margin: '10',							
							width: 50							
						}						
					],					
					layout: {
						type: 'hbox'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
