Ext.define('natcreator.view.ClassConfigsWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigsWindow',
	
	closable: false,
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	title: 'Edit Class Configs',
	width: 900,
	
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
					dataStore: 'store',					
					forceFit: true,					
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
							xtype: 'nattextcolumn',							
							dataField: 'name',							
							text: 'Name&nbsp;',							
							width: 200							
						},						
						{
							xtype: 'nattextcolumn',							
							dataField: 'types',							
							menuText: '',							
							renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
							{							
								if (!value || !value.length || value.length === 0) return 'no type';							
								var type = value[0];							
								if (type == 'Reference' || type == 'Instance' || type == 'Instance[]'){							
									var refType = record.get('refType');							
									if (refType){							
										var refTypeClass = viewport.projectEditor.stClasses.getById(refType);							
										type += '-' + refTypeClass.get('name');							
									}							
								}							
								return type;							
							},							
							text: 'Type',							
							width: 200							
						},						
						{
							xtype: 'nattextcolumn',							
							dataField: 'defaultValue',							
							text: 'Default Value&nbsp;',							
							width: 140							
						},						
						{
							xtype: 'natbooleancolumn',							
							dataField: 'common',							
							text: 'Common&nbsp;',							
							width: 100							
						},						
						{
							xtype: 'natbooleancolumn',							
							dataField: 'hidden',							
							text: 'Hidden&nbsp;',							
							width: 100							
						},						
						{
							xtype: 'natcheckcolumn',							
							dataField: 'dependency',							
							text: 'Dependency&nbsp;'							
						},						
						{
							xtype: 'nattextcolumn',							
							dataField: 'refType',							
							hidden: true,							
							text: 'Ref Type&nbsp;'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natclientstore',					
					dataModel: 'CDClassConfig',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
