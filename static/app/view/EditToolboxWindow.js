Ext.define('natcreator.view.EditToolboxWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.EditToolboxWindow',
	
	closable: false,
	height: 500,
	layout: {
		type: 'hbox',		
		align: 'stretch'		
	},
	modal: true,
	title: 'Edit Toolbox',
	width: 1000,
	
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
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnReset',							
							minWidth: 100,							
							text: 'Reset',							
							ui: 'blue'							
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
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
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
					],					
					dockedItems: [
						{
							xtype: 'nattextfield',							
							dock: 'top',							
							itemId: 'txtSearch'							
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
						align: 'center',						
						pack: 'center'						
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
					viewConfig: {					
						plugins: [					
							{					
								ptype: 'gridviewdragdrop'					
							}					
						]					
					},					
					columns: [
						{
							xtype: 'nattextcolumn',							
							dataIndex: 'name'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
