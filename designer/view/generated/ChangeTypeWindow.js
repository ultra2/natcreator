Ext.define('designer.view.generated.ChangeTypeWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ChangeTypeWindow',
	modal: true,
	title: 'Change Type',
	layout: {
		type: 'fit'
	},
	width: 800,
	height: 500,
	closeAction: 'hide',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattree',
					hideHeaders: true,
					forceFit: true,
					title: 'Available Classes',
					padding: '2',
					itemId: 'treeAvailableClasses',
					columns: [
						{
							xtype: 'treecolumn',
							dataIndex: 'name'
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
						margins: '0 0 0 5',
						minWidth: 80
					},
					cls: 'commandpanel',
					dock: 'bottom',
					items: [
						{
							xtype: 'natbutton',
							text: 'Change',
							ui: 'green',
							itemId: 'btnChange'
						},
						{
							xtype: 'natbutton',
							text: 'Cancel',
							itemId: 'btnCancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
