Ext.define('designer.view.generated.RegistrationWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.RegistrationWindow',
	height: 300,
	width: 446,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Create a New Account',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edRegistration',
					defaults: {
						anchor: '100%',
						labelWidth: 120
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'textfield',
							itemId: 'txtUsername',
							propertyPath: 'username',
							fieldLabel: 'Username'
						},
						{
							xtype: 'textfield',
							itemId: 'txtEmail',
							propertyPath: 'email',
							fieldLabel: 'Email'
						},
						{
							xtype: 'textfield',
							itemId: 'txtPassword',
							propertyPath: 'password',
							inputType: 'password',
							fieldLabel: 'Password'
						},
						{
							xtype: 'textfield',
							itemId: 'txtConfirmPassword',
							propertyPath: 'confirmPassword',
							inputType: 'password',
							fieldLabel: 'Password again'
						},
						{
							xtype: 'component',
							cls: 'small-label',
							html: 'By clicking on \'I accept\' below you are agreeing to the <a href="http://www.extsolutions.net/#web.Terms" target="_blank">Terms of Service</a> and the <a href="http://www.extsolutions.net/#web.Privacy" target="_blank">Privacy Policy</a>.',
							margin: '20 0 20 0'
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
							itemId: 'btnRegister',
							minWidth: 100,
							ui: 'green',
							text: 'I accept. Create my account.'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
