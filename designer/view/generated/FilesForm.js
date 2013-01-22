Ext.define('designer.view.generated.FilesForm', { 
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
							itemId: 'btnExpandAll',							
							icon: 'https://extsolutions.herokuapp.com/graphics/IconExperience/16/text_tree.png',							
							tooltip: 'Expand All'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnGenerate',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/lightning.png',							
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
					itemId: 'txtName',					
					dataIndex: 'name',					
					text: 'MyTreeColumn'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
