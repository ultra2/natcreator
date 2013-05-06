Ext.define('natcreator.view.InspectorForm', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.InspectorForm',
	
	forceFit: true,
	hideHeaders: true,
	rootVisible: false,
	sortableColumns: false,
	viewConfig: {	
		plugins: [	
			{	
				ptype: 'nattreeviewdragdrop',	
				dragGroup: 'DragFromToolbox',	
				dropGroup: 'DragFromToolbox',	
				allowContainerDrops: true	
			}	
		]	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'label',					
					dock: 'top',					
					itemId: 'title',					
					padding: '6',					
					style: 'background: white',					
					text: 'Schemas'					
				},				
				{
					xtype: 'toolbar',					
					dock: 'top',					
					items: [
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',							
							itemId: 'btnInherit',							
							tooltip: 'Inherit'							
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
							itemId: 'btnEditConfigs',							
							tooltip: 'Edit Configs'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/IconExperience/16/text_tree.png',							
							itemId: 'btnExpandAll',							
							tooltip: 'Expand All'							
						},						
						{
							xtype: 'natbutton',							
							enableToggle: true,							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/text-align-left1.png',							
							itemId: 'btnShowUserFunctionClasses',							
							tooltip: 'Show classes that defines user function'							
						}						
					]					
				},				
				{
					xtype: 'nattextfield',					
					dock: 'top',					
					itemId: 'txtSearch'					
				}				
			],			
			columns: [
				{
					xtype: 'treecolumn',					
					dataIndex: 'name',					
					itemId: 'txtName',					
					renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
					{					
						var iconUrl = 'resources/images/extjs_components.png';										
						var iconIndex = record.reference.getIconIndex();										
						var iconPosX = iconIndex * -16;					
						if (view.panel.showNonUserClasses){					
							value = record.reference.get('name') || record.reference.getDisplayNameForInspector();					
						}					
						else{					
							value = record.reference.getDisplayNameForInspector();					
						}					
						return '<div style="background-image: url(' + iconUrl + '); background-position: ' + iconPosX + 'px 0px; width: 16px; height: 16px; margin-right: 4px; position:relative; top: 4px; display: inline-block;"></div>' + value;					
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
