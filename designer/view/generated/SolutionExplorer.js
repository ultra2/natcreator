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
					xtype: 'SettingsForm',					
					itemId: 'frmSettings',					
					icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/tools-16.png'					
				},				
				{
					xtype: 'FilesForm',					
					itemId: 'frmFiles',					
					icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/folder.png'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
