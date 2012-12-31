Ext.define('designer.view.generated.CodeGenerationStepsForm', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationStepsForm',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	closable: true,
	preventHeader: true,
	title: 'Code Generation Steps',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'edSettings',
					bodyPadding: 10,
					items: [
						{
							xtype: 'checkboxfield',
							itemId: 'chIncludeTemplateFilesIntoGeneration',
							propertyPath: 'includeTemplateFilesIntoGeneration',
							boxLabel: 'Include Template Files Into Generation'
						}
					]
				},
				{
					xtype: 'natform',
					itemId: 'edConfigs',
					layout: {
						type: 'border'
					},
					flex: 1,
					items: [
						{
							xtype: 'natgrid',
							itemId: 'gridGenerationSteps',
							propertyPath: 'hasMany_generationSteps',
							region: 'center',
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
											itemId: 'btnMoveUp',
											icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/up.png',
											tooltip: 'Move Up'
										},
										{
											xtype: 'natbutton',
											itemId: 'btnMoveDown',
											icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/down.png',
											tooltip: 'Move Down'
										}
									]
								}
							],
							columns: [
								{
									xtype: 'rownumberer'
								},
								{
									xtype: 'gridcolumn',
									itemId: 'luGenerator',
									dataIndex: 'generator_id',
									width: 300,
									text: 'Generator',
									renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var col = this.columns[colIndex];
								var result = col.field.renderer(value, record);
								value = Ext.util.Format.htmlEncode(result);
								var project = value.substr(0, value.indexOf('/'));
								var generator = value.substr(project.length + 1);
								return "<b><big>" + generator + "</big></b></br>" + project;
							},
									editor: {
										xtype: 'combobox'
									}
								},
								{
									xtype: 'gridcolumn',
									dataIndex: 'path',
									width: 300,
									text: 'Path',
									editor: {
										xtype: 'textfield'
									}
								},
								{
									xtype: 'booleancolumn',
									dataIndex: 'deleteDirectory',
									width: 150,
									text: 'Delete Directory',
									editor: {
										xtype: 'checkboxfield'
									}
								},
								{
									xtype: 'booleancolumn',
									dataIndex: 'active',
									width: 100,
									text: 'Active',
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
							propertyPath: 'hasMany_generationSteps',
							region: 'south',
							split: true,
							height: 150,
							itemId: 'formGenerationSteps',
							layout: {
								type: 'vbox',
								align: 'stretch'
							},
							title: 'Step Parameters:',
							items: [
								{
									xtype: 'natsourceedit',
									propertyPath: 'params',
									parser: 'json',
									flex: 1
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
