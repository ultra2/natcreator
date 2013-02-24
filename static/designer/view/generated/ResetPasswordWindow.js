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
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
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
			]			
		});
		me.callParent(arguments);
	}
});
