Ext.define('designer.view.generated.InspectorForm', {
	extend: 'NAT.tree.Panel',
	alias: 'widget.InspectorForm',
	forceFit: true,
	hideHeaders: true,
	sortableColumns: false,
	rootVisible: false,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'label',
					dock: 'top',
					itemId: 'title',
					padding: '6',
					style: 'background: white',
					text: 'Schemas'
				},
				{
					xtype: 'toolbar',
					dock: 'top',
					items: [
						{
							xtype: 'natbutton',
							itemId: 'btnInherit',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
							tooltip: 'Inherit'
						},
						{
							xtype: 'natbutton',
							itemId: 'btnDelete',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
							tooltip: 'Delete'
						},
						{
							xtype: 'button',
							itemId: 'btnEditConfigs',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',
							tooltip: 'Edit Configs'
						},
						{
							xtype: 'button',
							itemId: 'btnExpandAll',
							icon: 'https://extsolutions.herokuapp.com/graphics/IconExperience/16/text_tree.png',
							tooltip: 'Expand All'
						}
					]
				}
			],
			columns: [
				{
					xtype: 'treecolumn',
					itemId: 'txtName',
					dataIndex: 'name'
				}
			]
		});
		me.callParent(arguments);
	}
});
