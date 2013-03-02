Ext.define('designer.view.generated.PropertyTree', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.PropertyTree',
	
	bodyStyle: 'background:#EDEBE0;',
	columnLines: true,
	enableColumnMove: false,
	forceFit: true,
	rootVisible: false,
	sortableColumns: false,
	viewConfig: {	
	    getRowClass: function(record) {	
	        if (!record) return '';	
	        return record.get('cls');	
	    }	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'toolbar',					
					cls: 'toolboxTabBar',					
					dock: 'top',					
					items: [
						{
							xtype: 'tbfill'							
						},						
						{
							xtype: 'natbutton',							
							enableToggle: true,							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/text-align--justify1.png',							
							itemId: 'btnShowCommonConfigs',							
							tooltip: 'Show common configs'							
						},						
						{
							xtype: 'natbutton',							
							enableToggle: true,							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/sortascend1.png',							
							itemId: 'btnShowConfigsInAlphabeticalOrder',							
							tooltip: 'Show configs in alphabetical order'							
						}						
					]					
				}				
			],			
			columns: [
				{
					xtype: 'treecolumn',					
					align: 'center',					
					dataIndex: 'name',					
					header: 'Name',					
					itemId: 'name',					
					menuDisabled: true,					
					sortable: false					
				},				
				{
					xtype: 'gridcolumn',					
					align: 'center',					
					dataIndex: 'value',					
					header: 'Value',					
					itemId: 'value',					
					menuDisabled: true,					
					sortable: false					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
