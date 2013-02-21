Ext.define('designer.view.generated.ChangeTypeWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ChangeTypeWindow',
	
	modal: true,
	title: 'Change Type',
	layout: {
		type: 'fit'		
	},
	width: 800,
	height: 500,
	
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
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
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
