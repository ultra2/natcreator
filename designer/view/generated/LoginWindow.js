Ext.define('designer.view.generated.LoginWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.LoginWindow',
	height: 230,
	width: 446,
	resizable: false,
	title: 'Log In',
	modal: true,
	layout: {
		type: 'fit'
	},
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edLogin',
					defaults: {
						anchor: '100%',
						labelWidth: 120
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'textfield',
							propertyPath: 'username',
							itemId: 'txtUsername',
							fieldLabel: 'Username',
							labelAlign: 'top'
						},
						{
							xtype: 'textfield',
							propertyPath: 'password',
							itemId: 'txtPassword',
							inputType: 'password',
							fieldLabel: 'Password',
							labelAlign: 'top'
						},
						{
							xtype: 'checkboxfield',
							propertyPath: 'rememberMe',
							fieldLabel: 'Remember me'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					height: 30,
					dock: 'bottom',
					cls: 'commandpanel',
					defaults: {
						margins: '0 0 0 5',
						autoWidth: true
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
							itemId: 'btnResetPasswordRequest',
							ui: 'blue',
							text: 'Can\'t access your account?'
						},
						{
							xtype: 'button',
							itemId: 'btnRegister',
							minWidth: 100,
							ui: 'green',
							text: 'Register'
						},
						{
							xtype: 'button',
							itemId: 'btnLogin',
							minWidth: 100,
							ui: 'green',
							text: 'Log In'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
