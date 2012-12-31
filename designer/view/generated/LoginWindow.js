Ext.define('designer.view.generated.LoginWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.LoginWindow',
	layout: {
		type: 'fit'
	},
	modal: true,
	title: 'Log In',
	resizable: false,
	width: 446,
	height: 220,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					defaults: {
						anchor: '100%',
						labelWidth: 120
					},
					itemId: 'edLogin',
					items: [
						{
							xtype: 'textfield',
							labelAlign: 'top',
							fieldLabel: 'Username',
							itemId: 'txtUsername',
							propertyPath: 'username'
						},
						{
							xtype: 'textfield',
							labelAlign: 'top',
							fieldLabel: 'Password',
							inputType: 'password',
							itemId: 'txtPassword',
							propertyPath: 'password'
						},
						{
							xtype: 'checkboxfield',
							fieldLabel: 'Remember me',
							propertyPath: 'rememberMe'
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
						margins: '0 0 0 5',
						autoWidth: true
					},
					cls: 'commandpanel',
					dock: 'bottom',
					height: 30,
					items: [
						{
							xtype: 'natbutton',
							text: 'Can\'t access your account?',
							ui: 'blue',
							itemId: 'btnResetPasswordRequest'
						},
						{
							xtype: 'natbutton',
							text: 'Register',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnRegister'
						},
						{
							xtype: 'natbutton',
							text: 'Log In',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnLogin'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
