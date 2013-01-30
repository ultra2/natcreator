Ext.define('designer.view.generated.ResetPasswordWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ResetPasswordWindow',
	
	modal: true,
	title: 'Reset Password (Step 2/2)',
	layout: {
		type: 'fit'		
	},
	resizable: false,
	width: 446,
	height: 280,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					height: 30,					
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
							text: 'Save Password',							
							ui: 'green',							
							minWidth: 100,							
							itemId: 'btnResetPassword'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					defaults: {					
						anchor: '100%',					
						labelWidth: 140					
					},					
					itemId: 'edResetPassword',					
					items: [
						{
							xtype: 'component',							
							margin: '10 0 10 0',							
							html: 'We sent you an email containing your username and a pin code. Please type them here.'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Pin code',							
							inputType: 'password',							
							propertyPath: 'pinCode',							
							itemId: 'txtPinCode'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Username',							
							propertyPath: 'username',							
							itemId: 'txtUsername'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'New password',							
							inputType: 'password',							
							propertyPath: 'newPassword',							
							itemId: 'txtNewPassword'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'New password again',							
							inputType: 'password',							
							propertyPath: 'confirmNewPassword',							
							itemId: 'txtConfirmNewPassword'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
