Ext.define('natcreator.view.LoginWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.LoginWindow',
	
	height: 220,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Log In',
	width: 446,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
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
							itemId: 'btnResetPasswordRequest',							
							text: 'Can\'t access your account?',							
							ui: 'blue'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnRegister',							
							minWidth: 100,							
							text: 'Register',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnLogin',							
							minWidth: 100,							
							text: 'Log In',							
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
					itemId: 'edLogin',					
					items: [
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Username',							
							itemId: 'txtUsername',							
							labelAlign: 'top',							
							propertyPath: 'username'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Password',							
							inputType: 'password',							
							itemId: 'txtPassword',							
							labelAlign: 'top',							
							propertyPath: 'password'							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Remember me',							
							propertyPath: 'rememberMe'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natrequeststore',					
					itemId: 'store',					
					requestModel: 'natcreator.model.RPLogin'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
