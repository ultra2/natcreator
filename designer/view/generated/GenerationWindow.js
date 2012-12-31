Ext.define('designer.view.generated.GenerationWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.GenerationWindow',
	modal: true,
	title: 'Code Generation',
	bodyPadding: 20,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	width: 800,
	height: 400,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattextarea',
					labelAlign: 'top',
					fieldLabel: 'Generation log',
					readOnly: true,
					flex: 1,
					itemId: 'txtGenerationLog'
				},
				{
					xtype: 'checkboxfield',
					margin: '5 0 0 0',
					boxLabel: 'Close this window if code generation was successful',
					itemId: 'chCloseOnSuccessful'
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
							xtype: 'component',
							minHeight: 24,
							minWidth: 100,
							itemId: 'downloadify',
							id: 'downloadify'
						},
						{
							xtype: 'natbutton',
							text: 'Open Repository',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnOpenRepository'
						},
						{
							xtype: 'natbutton',
							text: 'Close',
							minWidth: 100,
							itemId: 'btnClose'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
