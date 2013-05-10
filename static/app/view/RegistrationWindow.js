Ext.define('natcreator.view.RegistrationWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.RegistrationWindow',
	
	height: 300,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Create a New Account',
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
							itemId: 'btnRegister',							
							minWidth: 100,							
							text: 'I accept. Create my account.',							
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
						labelWidth: 120					
					},					
					itemId: 'edRegistration',					
					items: [
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Username',							
							itemId: 'txtUsername',							
							propertyPath: 'username'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Email',							
							itemId: 'txtEmail',							
							propertyPath: 'email'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Password',							
							inputType: 'password',							
							itemId: 'txtPassword',							
							propertyPath: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Password again',							
							inputType: 'password',							
							itemId: 'txtConfirmPassword',							
							propertyPath: 'confirmPassword'							
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
			stores: [
				{
					xtype: 'natrequeststore',					
					dataModel: 'natcreator.model.RPRegistration',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
