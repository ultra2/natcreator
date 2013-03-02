Ext.define('designer.view.generated.InspectorForm', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.InspectorForm',
	
	forceFit: true,
	hideHeaders: true,
	rootVisible: false,
	sortableColumns: false,
	
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
					menuText: '',					
					renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
					{					
						var iconUrl = 'resources/images/extjs_components.png';					
						var iconIndex = record.reference.getIconIndex();					
						var iconPosX = iconIndex * -16;					
						return '<div style="background-image: url(' + iconUrl + '); background-position: ' + iconPosX + 'px 0px; width: 16px; height: 16px; margin-right: 4px; position:relative; top: 4px; display: inline-block;"></div>' + value;					
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
