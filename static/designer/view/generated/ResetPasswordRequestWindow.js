Ext.define('designer.view.generated.ResetPasswordRequestWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ResetPasswordRequestWindow',
	
	height: 200,
	width: 446,
	resizable: false,
	layout: {
		type: 'fit'		
	},
	title: 'Reset Password (Step 2/1)',
	modal: true,
	
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
							itemId: 'btnResetPasswordRequest',							
							minWidth: 100,							
							text: 'Next',							
							ui: 'green'							
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
					itemId: 'edResetPasswordRequest',					
					items: [
						{
							xtype: 'component',							
							html: 'Please enter your email address below and we\'ll send you informations to reset your password.',							
							margin: '20 0 20 0'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Email',							
							itemId: 'txtEmail',							
							propertyPath: 'email'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
