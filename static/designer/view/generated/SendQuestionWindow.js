Ext.define('designer.view.generated.SendQuestionWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.SendQuestionWindow',
	
	resizable: false,
	modal: true,
	title: 'Request feature / Ask Question',
	layout: {
		type: 'fit'		
	},
	width: 600,
	height: 500,
	
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
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
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
