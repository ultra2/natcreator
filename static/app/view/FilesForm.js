Ext.define('natcreator.view.FilesForm', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.FilesForm',
	
	forceFit: true,
	hideHeaders: true,
	rootVisible: false,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					dock: 'top',					
					height: 22,					
					html: '<b>Files</b>',					
					itemId: 'title',					
					padding: '6',					
					style: 'background: white'					
				},				
				{
					xtype: 'toolbar',					
					dock: 'top',					
					items: [
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/folder-add2.png',							
							itemId: 'btnNewFolder',							
							tooltip: 'Creates new folder'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/code-2-add.png',							
							itemId: 'btnNewFile',							
							tooltip: 'Creates new file'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/link-add2.png',							
							itemId: 'btnNewLink',							
							tooltip: 'Creates new link'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',							
							itemId: 'btnDelete',							
							tooltip: 'Delete'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/IconExperience/16/text_tree.png',							
							itemId: 'btnExpandAll',							
							tooltip: 'Expand All'							
						},						
						{
							xtype: 'natbutton',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/lightning.png',							
							itemId: 'btnGenerate',							
							tooltip: 'Generate files by running generation steps'							
						},						
						{
							xtype: 'tbfill'							
						},						
						{
							xtype: 'component',							
							id: 'downloadify',							
							itemId: 'downloadify',							
							minHeight: 24,							
							minWidth: 100							
						}						
					]					
				}				
			],			
			columns: [
				{
					xtype: 'treecolumn',					
					dataIndex: 'name',					
					itemId: 'txtName',					
					renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
					{					
						var iconUrl = 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/' + record.get('type') + '.png';										
						return '<div style="background-image: url(' + iconUrl + '); background-position: 0px 0px; width: 16px; height: 16px; margin-right: 4px; position:relative; top: 4px; display: inline-block;"></div>' + value;										
					},					
					editor: {
						xtype: 'nattextfield'						
					}					
				}				
			],			
			plugins: [
				Ext.create('NAT.tree.plugin.CellEditing', {
					ptype: 'nattreecellediting'					
				})				
			]			
		});
		me.callParent(arguments);
	}
});
