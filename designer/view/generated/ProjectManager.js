Ext.define('designer.view.generated.ProjectManager', {
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectManager',
	height: 500,
	width: 1000,
	layout: {
		type: 'fit'
	},
	closable: false,
	title: 'Project Manager',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natgrid',
					itemId: 'gridMain',
					forceFit: true,
					columns: [
						{
							xtype: 'gridcolumn',
							dataIndex: 'name',
							text: 'Name',
							renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								if (record.get('isTemplate')) value += ' (template)';
								return value;
							}
						},
						{
							xtype: 'gridcolumn',
							dataIndex: 'roleName',
							text: 'Role'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					dock: 'top',
					height: 30,
					defaults: {
						width: 100,
						margin: '0 5 0 0'
					},
					layout: {
						type: 'hbox',
						align: 'stretch',
						padding: '2'
					},
					items: [
						{
							xtype: 'button',
							itemId: 'btnNew',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
							text: 'New'
						},
						{
							xtype: 'button',
							itemId: 'btnDelete',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
							text: 'Delete'
						},
						{
							xtype: 'button',
							itemId: 'btnRename',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',
							text: 'Rename',
							hidden: true
						}
					]
				},
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
							itemId: 'btnOpen',
							minWidth: 100,
							ui: 'green',
							text: 'Open'
						},
						{
							xtype: 'button',
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
