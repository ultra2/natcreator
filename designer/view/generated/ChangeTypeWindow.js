Ext.define('designer.view.generated.ChangeTypeWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ChangeTypeWindow',
	height: 500,
	width: 800,
	layout: {
		type: 'fit'
	},
	title: 'Change Type',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattree',
					itemId: 'treeAvailableClasses',
					padding: '2',
					title: 'Available Classes',
					forceFit: true,
					hideHeaders: true,
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
					dock: 'bottom',
					cls: 'commandpanel',
					defaults: {
						margins: '0 0 0 5',
						minWidth: 80
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
							itemId: 'btnChange',
							ui: 'green',
							text: 'Change'
						},
						{
							xtype: 'button',
							itemId: 'btnCancel',
							text: 'Cancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
