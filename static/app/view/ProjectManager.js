Ext.define('natcreator.view.ProjectManager', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectManager',
	
	closable: false,
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	title: 'Project Manager',
	width: 1000,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			stores: [
				{
					xtype: 'natquerystore',					
					autoLoad: true,					
					dataModel: 'natcreator.model.QRProjectList',					
					itemId: 'store'					
				}				
			],			
			items: [
				{
					xtype: 'natgrid',					
					dataStore: 'store',					
					forceFit: true,					
					itemId: 'gridMain',					
					columns: [
						{
							xtype: 'gridcolumn',							
							dataIndex: 'name',							
							text: 'Name'							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'type',							
							text: 'Type'							
						},						
						{
							xtype: 'numbercolumn',							
							dataIndex: 'version',							
							text: 'Version'							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'roleName',							
							text: 'Role'							
						}						
					]					
				}				
			],			
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
						align: 'stretch',						
						padding: '2'						
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
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
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
			]			
		});
		me.callParent(arguments);
	}
});
