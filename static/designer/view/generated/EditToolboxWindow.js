Ext.define('designer.view.generated.EditToolboxWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.EditToolboxWindow',
	
	modal: true,
	title: 'Edit Toolbox',
	closable: false,
	layout: {
		type: 'hbox',		
		align: 'stretch'		
	},
	width: 1000,
	height: 500,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					defaults: {					
						margins: 5					
					},					
					cls: 'commandbar',					
					dock: 'top',					
					layout: {
						type: 'hbox',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natcombobox',							
							labelWidth: 40,							
							fieldLabel: 'Group',							
							width: 254,							
							itemId: 'cbGroup'							
						},						
						{
							xtype: 'natbutton',							
							tooltip: 'Create new toolbox group',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',							
							itemId: 'btnNewGroup'							
						},						
						{
							xtype: 'natbutton',							
							tooltip: 'Delete a toolbox group',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',							
							itemId: 'btnDeleteGroup'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					flex: 1,					
					dock: 'bottom',					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							text: 'Save',							
							ui: 'green',							
							minWidth: 100,							
							itemId: 'btnSave'							
						},						
						{
							xtype: 'natbutton',							
							text: 'Cancel',							
							minWidth: 100,							
							itemId: 'btnCancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'nattree',					
					viewConfig: {					
						getRowClass: function(record) {					
							if (!record) return '';					
							return record.get('cls');					
						}					
					},					
					forceFit: true,					
					hideHeaders: true,					
					title: 'Available Classes',					
					padding: '2',					
					flex: 1,					
					itemId: 'treeAvailableClasses',					
					columns: [
						{
							xtype: 'treecolumn',							
							dataIndex: 'name'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					defaults: {					
						margins: '2.5f 5 2.5f 5'					
					},					
					cls: 'commandbar',					
					layout: {
						type: 'vbox',						
						pack: 'center',						
						align: 'center'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							tooltip: 'Add class to toolbox group',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/right1.png',							
							itemId: 'btnAddClass'							
						},						
						{
							xtype: 'natbutton',							
							tooltip: 'Remove class from toolbox group',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/left.png',							
							itemId: 'btnRemoveClass'							
						}						
					]					
				},				
				{
					xtype: 'natgrid',					
					flex: 1,					
					forceFit: true,					
					hideHeaders: true,					
					itemId: 'gridSelectedClasses',					
					padding: '2',					
					title: 'Selected Classes',					
					columns: [
						{
							xtype: 'gridcolumn',							
							dataIndex: 'name'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
