Ext.define('designer.view.generated.ClassConfigsWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigsWindow',
	height: 400,
	width: 600,
	layout: {
		type: 'fit'
	},
	closable: false,
	title: 'Edit Class Configs',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natgrid',
					itemId: 'gridMain',
					dockedItems: [
						{
							xtype: 'toolbar',
							itemId: 'tbMain',
							dock: 'top',
							items: [
								{
									xtype: 'natbutton',
									itemId: 'btnNew',
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',
									tooltip: 'New'
								},
								{
									xtype: 'natbutton',
									itemId: 'btnDelete',
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',
									tooltip: 'Delete'
								},
								{
									xtype: 'natbutton',
									itemId: 'btnEdit',
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',
									tooltip: 'Edit'
								}
							]
						}
					],
					columns: [
						{
							xtype: 'gridcolumn',
							itemId: 'txtName',
							width: 200,
							dataIndex: 'name',
							text: 'Name'
						},
						{
							xtype: 'gridcolumn',
							itemId: 'luType',
							width: 113,
							dataIndex: 'types',
							text: 'Type',
							renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var st = viewport.projectEditor.SM.getByKey('stDataTypes');
								var dataType = st.getById(value[0]);
								if (!dataType) dataType = st.getById('Object');
								return dataType.get('name');
							}
						},
						{
							xtype: 'gridcolumn',
							itemId: 'txtDefaultValue',
							width: 140,
							dataIndex: 'defaultValue',
							text: 'Default Value'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					dock: 'bottom',
					height: 30,
					defaults: {
						margins: '0 0 0 5',
						autoWidth: true
					},
					layout: {
						type: 'hbox',
						align: 'middle',
						pack: 'end',
						padding: '5'
					},
					cls: 'commandpanel',
					items: [
						{
							xtype: 'natbutton',
							itemId: 'btnClose',
							minWidth: 100,
							ui: 'gray',
							text: 'Close'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
