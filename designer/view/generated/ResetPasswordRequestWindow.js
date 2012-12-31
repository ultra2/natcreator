Ext.define('designer.view.generated.ResetPasswordRequestWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ResetPasswordRequestWindow',
	modal: true,
	title: 'Reset Password (Step 2/1)',
	layout: {
		type: 'fit'
	},
	resizable: false,
	width: 446,
	height: 200,
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
					itemId: 'edResetPasswordRequest',
					items: [
						{
							xtype: 'component',
							margin: '20 0 20 0',
							html: 'Please enter your email address below and we\'ll send you informations to reset your password.'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Email',
							propertyPath: 'email',
							itemId: 'txtEmail'
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
							text: 'Next',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnResetPasswordRequest'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
