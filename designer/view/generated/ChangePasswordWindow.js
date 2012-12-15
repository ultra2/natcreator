Ext.define('designer.view.generated.ChangePasswordWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ChangePasswordWindow',
	height: 240,
	width: 446,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Change Password',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edChangePassword',
					defaults: {
						anchor: '100%',
						labelWidth: 140
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'component',
							html: 'To reset your password, provide your current password and your new password below.',
							margin: '10 0 10 0'
						},
						{
							xtype: 'textfield',
							itemId: 'txtCurrentPassword',
							propertyPath: 'currentPassword',
							inputType: 'password',
							fieldLabel: 'Current password'
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
							itemId: 'btnChangePassword',
							minWidth: 100,
							ui: 'green',
							text: 'Change Password'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});