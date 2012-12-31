Ext.define('designer.view.generated.ChangePasswordWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ChangePasswordWindow',
	modal: true,
	title: 'Change Password',
	layout: {
		type: 'fit'
	},
	resizable: false,
	width: 446,
	height: 240,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					defaults: {
						anchor: '100%',
						labelWidth: 140
					},
					itemId: 'edChangePassword',
					items: [
						{
							xtype: 'component',
							margin: '10 0 10 0',
							html: 'To reset your password, provide your current password and your new password below.'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Current password',
							inputType: 'password',
							propertyPath: 'currentPassword',
							itemId: 'txtCurrentPassword'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'New password',
							inputType: 'password',
							propertyPath: 'newPassword',
							itemId: 'txtNewPassword'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'New password again',
							inputType: 'password',
							propertyPath: 'confirmNewPassword',
							itemId: 'txtConfirmNewPassword'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						padding: '5',
						pack: 'end',
						align: 'middle'
					},
					defaults: {
						margins: '0 0 0 5'
					},
					height: 30,
					cls: 'commandpanel',
					dock: 'bottom',
					items: [
						{
							xtype: 'natbutton',
							text: 'Change Password',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnChangePassword'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
