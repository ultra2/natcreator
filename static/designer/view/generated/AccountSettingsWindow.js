Ext.define('designer.view.generated.AccountSettingsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.AccountSettingsWindow',
	
	height: 300,
	width: 500,
	resizable: false,
	modal: true,
	title: 'Account Settings',
	layout: {
		type: 'fit'		
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
							itemId: 'btnSave',							
							ui: 'green',							
							text: 'Save'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							text: 'Cancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					itemId: 'ed',					
					defaults: {					
						anchor: '100%',					
						labelWidth: 140					
					},					
					bodyPadding: 10,					
					items: [
						{
							xtype: 'nattextarea',							
							itemId: 'memoHerokuPrivateKey',							
							propertyPath: 'herokuPrivateKey',							
							fieldLabel: 'HerokuPrivateKey'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
