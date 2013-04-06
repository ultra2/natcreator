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
					text: 'MyTreeColumn'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
