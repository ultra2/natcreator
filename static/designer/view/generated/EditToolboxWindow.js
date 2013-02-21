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
					cls: 'commandbar',					
					defaults: {					
						margins: 5					
					},					
					dock: 'top',					
					layout: {
						type: 'hbox',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natcombobox',							
							fieldLabel: 'Group',							
							itemId: 'cbGroup',							
							labelWidth: 40,							
							width: 254							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',							
							itemId: 'btnNewGroup',							
							tooltip: 'Create new toolbox group'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',							
							itemId: 'btnDeleteGroup',							
							tooltip: 'Delete a toolbox group'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					flex: 1,					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnSave',							
							minWidth: 100,							
							text: 'Save',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							minWidth: 100,							
							text: 'Cancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'nattree',					
					flex: 1,					
					forceFit: true,					
					hideHeaders: true,					
					itemId: 'treeAvailableClasses',					
					padding: '2',					
					title: 'Available Classes',					
					viewConfig: {					
						getRowClass: function(record) {					
							if (!record) return '';					
							return record.get('cls');					
						}					
					},					
					columns: [
						{
							xtype: 'treecolumn',							
							dataIndex: 'name'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					cls: 'commandbar',					
					defaults: {					
						margins: '2.5f 5 2.5f 5'					
					},					
					layout: {
						type: 'vbox',						
						pack: 'center',						
						align: 'center'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/right1.png',							
							itemId: 'btnAddClass',							
							tooltip: 'Add class to toolbox group'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/left.png',							
							itemId: 'btnRemoveClass',							
							tooltip: 'Remove class from toolbox group'							
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
