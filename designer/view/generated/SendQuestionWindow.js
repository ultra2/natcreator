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
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					defaults: {
						anchor: '100%',
						labelWidth: 120,
						labelAlign: 'top'
					},
					itemId: 'edSendQuestion',
					items: [
						{
							xtype: 'textfield',
							fieldLabel: 'Subject',
							propertyPath: 'subject',
							itemId: 'txtSubject'
						},
						{
							xtype: 'textarea',
							flex: 1,
							fieldLabel: 'Question',
							propertyPath: 'question',
							itemId: 'txtQuestion'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						padding: '5',
						pack: 'end',
						align: 'middle'
					},
					defaults: {
						margins: '0 0 0 5'
					},
					height: 30,
					cls: 'commandpanel',
					dock: 'bottom',
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
			]
		});
		me.callParent(arguments);
	}
});
