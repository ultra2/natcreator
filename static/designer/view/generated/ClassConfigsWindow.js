Ext.define('designer.view.generated.ClassConfigsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigsWindow',
	
	height: 500,
	width: 700,
	layout: {
		type: 'fit'		
	},
	closable: false,
	title: 'Edit Class Configs',
	modal: true,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					dock: 'bottom',					
					height: 30,					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
					},					
					cls: 'commandpanel',					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
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
			],			
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
							width: 200,							
							dataIndex: 'types',							
							text: 'Type',							
							menuText: '',							
							renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
							{							
								return viewport.projectEditor.getClassConfigTypeName(value[0]);							
							}							
						},						
						{
							xtype: 'gridcolumn',							
							itemId: 'txtDefaultValue',							
							width: 140,							
							dataIndex: 'defaultValue',							
							text: 'Default Value'							
						},						
						{
							xtype: 'booleancolumn',							
							itemId: 'chCommon',							
							text: 'Common',							
							dataIndex: 'common',							
							width: 100,							
							editor: {
								xtype: 'natcheckboxfield'								
							}							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
