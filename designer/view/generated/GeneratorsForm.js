Ext.define('designer.view.generated.GeneratorsForm', {
	extend: 'NAT.grid.Panel',
	alias: 'widget.GeneratorsForm',
	forceFit: true,
	sortableColumns: false,
	columnLines: false,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',
					dock: 'top',
					height: 22,
					html: '<b>Generators</b>',
					itemId: 'title',
					padding: '6',
					style: 'background: white'
				},
				{
					xtype: 'toolbar',
					dock: 'top',
					items: [
						{
							xtype: 'button',
							itemId: 'btnNew',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
							tooltip: 'New'
						},
						{
							xtype: 'button',
							itemId: 'btnDelete',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
							tooltip: 'Delete'
						},
						{
							xtype: 'button',
							itemId: 'btnRename',
							icon: 'https://extsolutions.herokuapp.com/graphics/icon/16/rename.png',
							tooltip: 'Rename'
						},
						{
							xtype: 'button',
							itemId: 'btnUpdate',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/clockwise-arrow.png',
							tooltip: 'Update'
						},
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'button',
							itemId: 'btnInstall',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/download.png',
							tooltip: 'Install'
						}
					]
				}
			],
			columns: [
				{
					xtype: 'gridcolumn',
					itemId: 'txtName',
					dataIndex: 'name',
					text: 'Name',
					renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var project = value.substr(0, value.indexOf('/'));
								var generator = value.substr(project.length + 1);
								var ownedGenerator = viewport.projectEditor.IsOwnedGenerator(record);
								if (!ownedGenerator) {
								    return '<span style="color:blue"><b><big>' + generator + '</big></b></br>' + project + '</span>';
								} else {
								    return '<span style="color:black"><b><big>' + generator + '</big></b></br></span>';
								}
							}
				},
				{
					xtype: 'gridcolumn',
					itemId: 'txtGeneratorVersion',
					width: 30,
					dataIndex: 'generatorVersion',
					text: 'Version'
				}
			]
		});
		me.callParent(arguments);
	}
});
