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
							fieldLabel: 'Pin code',							
							inputType: 'password',							
							itemId: 'txtPinCode',							
							propertyPath: 'pinCode'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Username',							
							itemId: 'txtUsername',							
							propertyPath: 'username'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'New password',							
							inputType: 'password',							
							itemId: 'txtNewPassword',							
							propertyPath: 'newPassword'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'New password again',							
							inputType: 'password',							
							itemId: 'txtConfirmNewPassword',							
							propertyPath: 'confirmNewPassword'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natrequeststore',					
					dataModel: 'natcreator.model.RPResetPassword',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
