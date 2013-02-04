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
							xtype: 'natbutton',							
							itemId: 'btnResetPasswordRequest',							
							minWidth: 100,							
							ui: 'green',							
							text: 'Next'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					itemId: 'edResetPasswordRequest',					
					defaults: {					
						anchor: '100%',					
						labelWidth: 120					
					},					
					bodyPadding: 10,					
					items: [
						{
							xtype: 'component',							
							html: 'Please enter your email address below and we\'ll send you informations to reset your password.',							
							margin: '20 0 20 0'							
						},						
						{
							xtype: 'nattextfield',							
							itemId: 'txtEmail',							
							propertyPath: 'email',							
							fieldLabel: 'Email'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
