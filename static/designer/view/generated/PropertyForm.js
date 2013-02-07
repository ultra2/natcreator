Ext.define('designer.view.generated.PropertyForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.PropertyForm',
	
	layout: {
		type: 'vbox',		
		align: 'stretch'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'toolbar',					
					dock: 'top',					
					cls: 'toolboxTabBar',					
					items: [
						{
							xtype: 'tbfill'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnShowCommonConfigs',							
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/text-align--justify1.png',							
							tooltip: 'Show common configs',							
							enableToggle: true							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'PropertyTree',					
					itemId: 'propertytree',					
					flex: 1,					
					animate: false,					
					sortableColumns: false,					
					hideHeaders: true,					
					forceFit: true					
				},				
				{
					xtype: 'panel',					
					itemId: 'pnlCommands',					
					bodyStyle: 'background:lightgray',					
					height: 5					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
