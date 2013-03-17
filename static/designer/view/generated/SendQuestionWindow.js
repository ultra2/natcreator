Ext.define('designer.view.generated.SendQuestionWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.SendQuestionWindow',
	
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Request feature / Ask Question',
	width: 600,
	
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
							itemId: 'btnSendQuestion',							
							minWidth: 100,							
							text: 'Send Request',							
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
						labelWidth: 120,					
						labelAlign: 'top'					
					},					
					itemId: 'edSendQuestion',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Subject',							
							itemId: 'txtSubject',							
							propertyPath: 'subject'							
						},						
						{
							xtype: 'nattextarea',							
							fieldLabel: 'Question',							
							flex: 1,							
							itemId: 'txtQuestion',							
							propertyPath: 'question'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
