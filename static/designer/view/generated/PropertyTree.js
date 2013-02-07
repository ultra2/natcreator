Ext.define('designer.view.generated.PropertyTree', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.PropertyTree',
	
	bodyStyle: 'background:#EDEBE0;',
	enableColumnMove: false,
	columnLines: true,
	rootVisible: false,
	viewConfig: {	
	    getRowClass: function(record) {	
	        if (!record) return '';	
	        return record.get('cls');	
	    }	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			columns: [
				{
					xtype: 'treecolumn',					
					header: 'Name',					
					sortable: false,					
					dataIndex: 'name',					
					itemId: 'name',					
					menuDisabled: true					
				},				
				{
					xtype: 'gridcolumn',					
					header: 'Value',					
					sortable: false,					
					dataIndex: 'value',					
					itemId: 'value',					
					menuDisabled: true					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
