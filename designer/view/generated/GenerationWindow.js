Ext.define('designer.view.generated.GenerationWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.GenerationWindow',
	height: 400,
	width: 800,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	bodyPadding: 20,
	title: 'Code Generation',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattextarea',
					itemId: 'txtGenerationLog',
					flex: 1,
					readOnly: true,
					fieldLabel: 'Generation log',
					labelAlign: 'top'
				},
				{
					xtype: 'natcheckboxfield',
					itemId: 'chCloseOnSuccessful',
					boxLabel: 'Close this window if code generation was successful',
					margin: '5 0 0 0'
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
							xtype: 'component',
							id: 'downloadify',
							itemId: 'downloadify',
							minWidth: 100,
							minHeight: 24
						},
						{
							xtype: 'natbutton',
							itemId: 'btnOpenRepository',
							minWidth: 100,
							ui: 'green',
							text: 'Open Repository'
						},
						{
							xtype: 'natbutton',
							itemId: 'btnClose',
							minWidth: 100,
							text: 'Close'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
