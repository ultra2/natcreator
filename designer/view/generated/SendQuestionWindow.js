Ext.define('designer.view.generated.SendQuestionWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.SendQuestionWindow',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edSendQuestion',
					defaults: {
						anchor: '100%',
						labelWidth: 120,
						labelAlign: 'top'
					},
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'textfield',
							itemId: 'txtSubject',
							propertyPath: 'subject',
							fieldLabel: 'Subject'
						},
						{
							xtype: 'textarea',
							itemId: 'txtQuestion',
							propertyPath: 'question',
							fieldLabel: 'Question',
							flex: 1
						}
					]
				}
			],
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
							xtype: 'button',
							itemId: 'btnSendQuestion',
							minWidth: 100,
							ui: 'green',
							text: 'Send Request'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
