Ext.define('natcreator.view.ChangeTypeWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ChangeTypeWindow',
	
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	title: 'Change Type',
	width: 800,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						minWidth: 80					
					},					
					dock: 'bottom',					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnChange',							
							text: 'Change',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							text: 'Cancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'nattree',					
					forceFit: true,					
					hideHeaders: true,					
					itemId: 'treeAvailableClasses',					
					padding: '2',					
					title: 'Available Classes',					
					columns: [
						{
							xtype: 'treecolumn',							
							dataIndex: 'name'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
