Ext.define('designer.view.generated.ClassConfigsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigsWindow',
	
	height: 500,
	width: 800,
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
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
					},					
					dock: 'bottom',					
					height: 30,					
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
							text: 'Close',							
							ui: 'gray'							
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
							dock: 'top',							
							itemId: 'tbMain',							
							items: [
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',									
									itemId: 'btnNew',									
									tooltip: 'New'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',									
									itemId: 'btnDelete',									
									tooltip: 'Delete'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',									
									itemId: 'btnEdit',									
									tooltip: 'Edit'									
								}								
							]							
						}						
					],					
					columns: [
						{
							xtype: 'gridcolumn',							
							dataIndex: 'name',							
							itemId: 'txtName',							
							text: 'Name',							
							width: 200							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'types',							
							itemId: 'luType',							
							menuText: '',							
							renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
							{							
								return viewport.projectEditor.getClassConfigTypeName(value[0]);							
							},							
							text: 'Type',							
							width: 200							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'defaultValue',							
							itemId: 'txtDefaultValue',							
							text: 'Default Value',							
							width: 140							
						},						
						{
							xtype: 'booleancolumn',							
							dataIndex: 'common',							
							itemId: 'chCommon',							
							text: 'Common',							
							width: 100							
						},						
						{
							xtype: 'booleancolumn',							
							dataIndex: 'hidden',							
							itemId: 'chHidden',							
							text: 'Hidden',							
							width: 100							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
