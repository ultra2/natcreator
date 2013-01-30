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
							text: 'Send Request',							
							ui: 'green',							
							minWidth: 100,							
							itemId: 'btnSendQuestion'							
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
							propertyPath: 'subject',							
							itemId: 'txtSubject'							
						},						
						{
							xtype: 'nattextarea',							
							flex: 1,							
							fieldLabel: 'Question',							
							propertyPath: 'question',							
							itemId: 'txtQuestion'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
