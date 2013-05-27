Ext.define('natcreator.view.ChangePasswordWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ChangePasswordWindow',
	
	height: 240,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Change Password',
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
							itemId: 'btnChangePassword',							
							minWidth: 100,							
							text: 'Change Password',							
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
						labelWidth: 140					
					},					
					itemId: 'edChangePassword',					
					items: [
						{
							xtype: 'component',							
							html: 'To reset your password, provide your current password and your new password below.',							
							margin: '10 0 10 0'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'currentPassword',							
							dataStore: 'store',							
							fieldLabel: 'Current Password&nbsp;',							
							inputType: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'newPassword',							
							dataStore: 'store',							
							fieldLabel: 'New Password&nbsp;',							
							inputType: 'password'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'confirmNewPassword',							
							dataStore: 'store',							
							fieldLabel: 'Confirm New Password&nbsp;',							
							inputType: 'password'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natrequeststore',					
					dataModel: 'RPChangePassword',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
