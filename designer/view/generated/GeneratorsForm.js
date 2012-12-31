Ext.define('designer.view.generated.GeneratorsForm', {
	extend: 'NAT.grid.Panel',
	alias: 'widget.GeneratorsForm',
	columnLines: false,
	sortableColumns: false,
	forceFit: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',
					style: 'background: white',
					padding: '6',
					itemId: 'title',
					html: '<b>Generators</b>',
					height: 22,
					dock: 'top'
				},
				{
					xtype: 'toolbar',
					dock: 'top',
					items: [
						{
							xtype: 'natbutton',
							tooltip: 'New',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
							itemId: 'btnNew'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Delete',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
							itemId: 'btnDelete'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Rename',
							icon: 'https://extsolutions.herokuapp.com/graphics/icon/16/rename.png',
							itemId: 'btnRename'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Update',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/clockwise-arrow.png',
							itemId: 'btnUpdate'
						},
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Install',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/download.png',
							itemId: 'btnInstall'
						}
					]
				}
			],
			columns: [
				{
					xtype: 'gridcolumn',
					renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var project = value.substr(0, value.indexOf('/'));
								var generator = value.substr(project.length + 1);
								var ownedGenerator = viewport.projectEditor.IsOwnedGenerator(record);
								if (!ownedGenerator) {
								    return '<span style="color:blue"><b><big>' + generator + '</big></b></br>' + project + '</span>';
								} else {
								    return '<span style="color:black"><b><big>' + generator + '</big></b></br></span>';
								}
							},
					text: 'Name',
					dataIndex: 'name',
					itemId: 'txtName'
				},
				{
					xtype: 'gridcolumn',
					text: 'Version',
					dataIndex: 'generatorVersion',
					width: 30,
					itemId: 'txtGeneratorVersion'
				}
			]
		});
		me.callParent(arguments);
	}
});
