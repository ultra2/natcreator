Ext.define('designer.view.generated.ProjectManager', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectManager',
	
	modal: true,
	title: 'Project Manager',
	closable: false,
	layout: {
		type: 'fit'		
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
						width: 100,					
						margin: '0 5 0 0'					
					},					
					dock: 'top',					
					height: 30,					
					layout: {
						type: 'hbox',						
						padding: '2',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',							
							itemId: 'btnNew',							
							text: 'New'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',							
							itemId: 'btnDelete',							
							text: 'Delete'							
						},						
						{
							xtype: 'natbutton',							
							hidden: true,							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',							
							itemId: 'btnRename',							
							text: 'Rename'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnOpen',							
							minWidth: 100,							
							text: 'Open',							
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
					xtype: 'natgrid',					
					forceFit: true,					
					itemId: 'gridMain',					
					columns: [
						{
							xtype: 'gridcolumn',							
							dataIndex: 'name',							
							menuText: '',							
							renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
							{							
								if (record.get('isTemplate')) value += ' (template)';							
								return value;							
							},							
							text: 'Name'							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'roleName',							
							text: 'Role'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
