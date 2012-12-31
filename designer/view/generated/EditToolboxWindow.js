Ext.define('designer.view.generated.EditToolboxWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.EditToolboxWindow',
	height: 500,
	width: 1000,
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	closable: false,
	title: 'Edit Toolbox',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattree',
					itemId: 'treeAvailableClasses',
					flex: 1,
					padding: '2',
					title: 'Available Classes',
					hideHeaders: true,
					forceFit: true,
					viewConfig: {
						getRowClass: function(record) {        if (!record) return '';        return record.get('cls');    }
					},
					columns: [
						{
							xtype: 'treecolumn',
							dataIndex: 'name'
						}
					]
				},
				{
					xtype: 'container',
					cls: 'commandbar',
					defaults: {
						margins: '2.5f 5 2.5f 5'
					},
					layout: {
						type: 'vbox',
						align: 'center',
						pack: 'center'
					},
					items: [
						{
							xtype: 'natbutton',
							itemId: 'btnAddClass',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/right1.png',
							tooltip: 'Add class to toolbox group'
						},
						{
							xtype: 'natbutton',
							itemId: 'btnRemoveClass',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/left.png',
							tooltip: 'Remove class from toolbox group'
						}
					]
				},
				{
					xtype: 'natgrid',
					title: 'Selected Classes',
					padding: '2',
					itemId: 'gridSelectedClasses',
					hideHeaders: true,
					forceFit: true,
					flex: 1,
					columns: [
						{
							xtype: 'gridcolumn',
							dataIndex: 'name'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					dock: 'top',
					cls: 'commandbar',
					defaults: {
						margins: 5
					},
					layout: {
						type: 'hbox',
						align: 'middle'
					},
					items: [
						{
							xtype: 'combobox',
							itemId: 'cbGroup',
							width: 254,
							fieldLabel: 'Group',
							labelWidth: 40
						},
						{
							xtype: 'natbutton',
							itemId: 'btnNewGroup',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
							tooltip: 'Create new toolbox group'
						},
						{
							xtype: 'natbutton',
							itemId: 'btnDeleteGroup',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
							tooltip: 'Delete a toolbox group'
						}
					]
				},
				{
					xtype: 'container',
					dock: 'bottom',
					flex: 1,
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
							xtype: 'natbutton',
							itemId: 'btnSave',
							minWidth: 100,
							ui: 'green',
							text: 'Save'
						},
						{
							xtype: 'natbutton',
							itemId: 'btnCancel',
							minWidth: 100,
							text: 'Cancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
