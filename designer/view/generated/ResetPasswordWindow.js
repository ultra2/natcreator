Ext.define('designer.view.generated.ResetPasswordWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ResetPasswordWindow',
	height: 280,
	width: 446,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Reset Password (Step 2/2)',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edResetPassword',
					defaults: {
						anchor: '100%',
						labelWidth: 140
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'component',
							html: 'We sent you an email containing your username and a pin code. Please type them here.',
							margin: '10 0 10 0'
						},
						{
							xtype: 'textfield',
							itemId: 'txtPinCode',
							propertyPath: 'pinCode',
							inputType: 'password',
							fieldLabel: 'Pin code'
						},
						{
							xtype: 'textfield',
							itemId: 'txtUsername',
							propertyPath: 'username',
							fieldLabel: 'Username'
						},
						{
							xtype: 'textfield',
							itemId: 'txtNewPassword',
							propertyPath: 'newPassword',
							inputType: 'password',
							fieldLabel: 'New password'
						},
						{
							xtype: 'textfield',
							itemId: 'txtConfirmNewPassword',
							propertyPath: 'confirmNewPassword',
							inputType: 'password',
							fieldLabel: 'New password again'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					dock: 'bottom',
					cls: 'commandpanel',
					height: 30,
					defaults: {
						margins: '0 0 0 5'
					},
					layout: {
						type: 'hbox',
						align: 'middle',
						pack: 'end',
						padding: '5'
					},
					items: [
						{
							xtype: 'button',
							itemId: 'btnResetPassword',
							minWidth: 100,
							ui: 'green',
							text: 'Save Password'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
