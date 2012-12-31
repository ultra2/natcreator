Ext.define('designer.view.generated.CodeGenerationStepsForm', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationStepsForm',
	title: 'Code Generation Steps',
	preventHeader: true,
	closable: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					itemId: 'edSettings',
					items: [
						{
							xtype: 'checkboxfield',
							boxLabel: 'Include Template Files Into Generation',
							propertyPath: 'includeTemplateFilesIntoGeneration',
							itemId: 'chIncludeTemplateFilesIntoGeneration'
						}
					]
				},
				{
					xtype: 'natform',
					flex: 1,
					layout: {
						type: 'border'
					},
					itemId: 'edConfigs',
					items: [
						{
							xtype: 'natgrid',
							region: 'center',
							propertyPath: 'hasMany_generationSteps',
							itemId: 'gridGenerationSteps',
							dockedItems: [
								{
									xtype: 'toolbar',
									dock: 'top',
									itemId: 'tbMain',
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
											tooltip: 'Move Up',
											icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/up.png',
											itemId: 'btnMoveUp'
										},
										{
											xtype: 'natbutton',
											tooltip: 'Move Down',
											icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/down.png',
											itemId: 'btnMoveDown'
										}
									]
								}
							],
							columns: [
								{
									xtype: 'rownumberer'
								},
								{
									xtype: 'natlookupcolumn',
									renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var col = this.columns[colIndex];
								var result = col.field.renderer(value, record);
								value = Ext.util.Format.htmlEncode(result);
								var project = value.substr(0, value.indexOf('/'));
								var generator = value.substr(project.length + 1);
								return "<b><big>" + generator + "</big></b></br>" + project;
							},
									text: 'Generator',
									width: 300,
									dataIndex: 'generator_id',
									itemId: 'luGenerator',
									editor: {
										xtype: 'natlookupfield'
									}
								},
								{
									xtype: 'gridcolumn',
									text: 'Path',
									width: 300,
									dataIndex: 'path',
									editor: {
										xtype: 'nattextfield'
									}
								},
								{
									xtype: 'booleancolumn',
									text: 'Delete Directory',
									width: 150,
									dataIndex: 'deleteDirectory',
									editor: {
										xtype: 'checkboxfield'
									}
								},
								{
									xtype: 'booleancolumn',
									text: 'Active',
									width: 100,
									dataIndex: 'active',
									editor: {
										xtype: 'checkboxfield'
									}
								}
							],
							plugins: [
								{
									xtype: 'cellediting'
								}
							]
						},
						{
							xtype: 'natform',
							title: 'Step Parameters:',
							layout: {
								type: 'vbox',
								align: 'stretch'
							},
							itemId: 'formGenerationSteps',
							height: 150,
							split: true,
							region: 'south',
							propertyPath: 'hasMany_generationSteps',
							items: [
								{
									xtype: 'natsourceedit',
									flex: 1,
									parser: 'json',
									propertyPath: 'params'
								}
							]
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
