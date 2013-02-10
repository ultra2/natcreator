Ext.define('designer.view.generated.SettingsForm', { 
	extend: 'NAT.tree.Panel',
	alias: 'widget.SettingsForm',
	
	forceFit: true,
	hideHeaders: true,
	sortableColumns: false,
	rootVisible: false,
	root: '',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					dock: 'top',					
					height: 22,					
					html: '<b>Settings</b>',					
					itemId: 'title',					
					padding: '6',					
					style: 'background: white'					
				}				
			],			
			columns: [
				{
					xtype: 'treecolumn',					
					dataIndex: 'name'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
