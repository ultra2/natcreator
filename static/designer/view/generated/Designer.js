Ext.define('designer.view.generated.Designer', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.Designer',
	
	layout: {
		type: 'border'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'container',					
					region: 'north',					
					itemId: 'contHeader',					
					minHeight: 52,					
					style: 'background-color: gray',					
					layout: {
						type: 'hbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'container',							
							itemId: 'tbTop',							
							width: 320,							
							defaults: {							
								scale: 'medium',							
								margin: '0 5 0 0'							
							},							
							layout: {
								type: 'hbox',								
								align: 'middle',								
								padding: '5'								
							},							
							items: [
								{
									xtype: 'natbutton',									
									itemId: 'btnSaveAll',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/save.png',									
									tooltip: 'Save all changes'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnCancel',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/cancel.png',									
									tooltip: 'Cancel current edited object\'s changes',									
									hidden: true									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnRefresh',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/refresh1.png',									
									tooltip: 'Refresh'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnGenerate',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/lightning.png',									
									tooltip: 'Generate source code'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnOpenRepository',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/code.png',									
									tooltip: 'Open Github repository'									
								}								
							]							
						},						
						{
							xtype: 'Toolbox',							
							itemId: 'toolbox',							
							flex: 1							
						}						
					]					
				},				
				{
					xtype: 'nattabpanel',					
					itemId: 'tabEditor',					
					region: 'center'					
				},				
				{
					xtype: 'SolutionExplorer',					
					itemId: 'tabSolution',					
					region: 'west',					
					width: 320,					
					collapsible: true,					
					hideCollapseTool: true,					
					preventHeader: true,					
					split: true					
				},				
				{
					xtype: 'PropertyForm',					
					itemId: 'PropertyForm',					
					region: 'east',					
					width: 500,					
					collapsible: true,					
					split: true					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
