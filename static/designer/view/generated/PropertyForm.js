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
			items: [
				{
					xtype: 'PropertyTree',					
					animate: false,					
					flex: 1,					
					forceFit: true,					
					hideHeaders: true,					
					itemId: 'propertytree',					
					sortableColumns: false					
				},				
				{
					xtype: 'panel',					
					bodyStyle: 'background:lightgray',					
					height: 5,					
					itemId: 'pnlCommands'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
