Ext.define('designer.view.generated.RegistrationWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.RegistrationWindow',
	
	modal: true,
	title: 'Create a New Account',
	layout: {
		type: 'fit'		
	},
	resizable: false,
	width: 446,
	height: 300,
	
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
							text: 'I accept. Create my account.',							
							ui: 'green',							
							minWidth: 100,							
							itemId: 'btnRegister'							
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
						labelWidth: 120					
					},					
					itemId: 'edRegistration',					
					items: [
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Username',							
							propertyPath: 'username',							
							itemId: 'txtUsername'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Email',							
							propertyPath: 'email',							
							itemId: 'txtEmail'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Password',							
							inputType: 'password',							
							propertyPath: 'password',							
							itemId: 'txtPassword'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Password again',							
							inputType: 'password',							
							propertyPath: 'confirmPassword',							
							itemId: 'txtConfirmPassword'							
						},						
						{
							xtype: 'component',							
							margin: '20 0 20 0',							
							html: 'By clicking on \'I accept\' below you are agreeing to the <a href="http://www.extsolutions.net/#web.Terms" target="_blank">Terms of Service</a> and the <a href="http://www.extsolutions.net/#web.Privacy" target="_blank">Privacy Policy</a>.',							
							cls: 'small-label'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
