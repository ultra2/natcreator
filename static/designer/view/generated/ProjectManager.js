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
					height: 30,					
					dock: 'top',					
					layout: {
						type: 'hbox',						
						padding: '2',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							text: 'New',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',							
							itemId: 'btnNew'							
						},						
						{
							xtype: 'natbutton',							
							text: 'Delete',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',							
							itemId: 'btnDelete'							
						},						
						{
							xtype: 'natbutton',							
							hidden: true,							
							text: 'Rename',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',							
							itemId: 'btnRename'							
						}						
					]					
				},				
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					height: 30,					
					cls: 'commandpanel',					
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
							text: 'Open',							
							ui: 'green',							
							minWidth: 100,							
							itemId: 'btnOpen'							
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
					xtype: 'natgrid',					
					forceFit: true,					
					itemId: 'gridMain',					
					columns: [
						{
							xtype: 'gridcolumn',							
							text: 'Name',							
							dataIndex: 'name',							
							menuText: '',							
							renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
							{							
								if (record.get('isTemplate')) value += ' (template)';							
								return value;							
							}							
						},						
						{
							xtype: 'gridcolumn',							
							text: 'Role',							
							dataIndex: 'roleName'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
