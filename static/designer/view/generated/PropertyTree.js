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
					dataIndex: 'name',					
					header: 'Name',					
					itemId: 'name',					
					menuDisabled: true,					
					sortable: false					
				},				
				{
					xtype: 'gridcolumn',					
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
