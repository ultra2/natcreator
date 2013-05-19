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
							dataField: 'username',							
							dataStore: 'store',							
							fieldLabel: 'Username&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'email',							
							dataStore: 'store',							
							fieldLabel: 'Email&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'password',							
							dataStore: 'store',							
							fieldLabel: 'Password&nbsp;',							
							inputType: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'confirmPassword',							
							dataStore: 'store',							
							fieldLabel: 'Confirm Password&nbsp;',							
							inputType: 'password'							
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
					dataModel: 'RPRegistration',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
