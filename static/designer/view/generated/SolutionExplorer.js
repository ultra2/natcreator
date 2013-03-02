Ext.define('designer.view.generated.SolutionExplorer', { 
	extend: 'Ext.tab.Panel',
	alias: 'widget.SolutionExplorer',
	
	tabBar: {	
	    baseCls: 'solutionExplorerTabBar'	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'FilesForm',					
					icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/folder.png',					
					itemId: 'frmFiles'					
				},				
				{
					xtype: 'SettingsForm',					
					icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/tools-16.png',					
					itemId: 'frmSettings'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
