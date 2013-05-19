Ext.define('natcreator.view.ResetPasswordWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ResetPasswordWindow',
	
	height: 280,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Reset Password (Step 2/2)',
	width: 446,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnResetPassword',							
							minWidth: 100,							
							text: 'Save Password',							
							ui: 'green'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					dataStore: 'store',					
					defaults: {					
						anchor: '100%',					
						labelWidth: 140					
					},					
					itemId: 'edResetPassword',					
					items: [
						{
							xtype: 'component',							
							html: 'We sent you an email containing your username and a pin code. Please type them here.',							
							margin: '10 0 10 0'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'pinCode',							
							dataStore: 'store',							
							fieldLabel: 'Pin Code&nbsp;',							
							inputType: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'username',							
							dataStore: 'store',							
							fieldLabel: 'Username&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'newPassword',							
							dataStore: 'store',							
							fieldLabel: 'New Password&nbsp;',							
							inputType: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'confirmNewPassword',							
							dataStore: 'store',							
							fieldLabel: 'Confirm New Password&nbsp;',							
							inputType: 'password'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natrequeststore',					
					dataModel: 'RPResetPassword',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
