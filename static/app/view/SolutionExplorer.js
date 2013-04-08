Ext.define('natcreator.view.SolutionExplorer', { 
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
				}				
			]			
		});
		me.callParent(arguments);
	}
});
