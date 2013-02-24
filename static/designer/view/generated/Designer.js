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
					itemId: 'contHeader',					
					minHeight: 52,					
					region: 'north',					
					style: 'background-color: gray',					
					layout: {
						type: 'hbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'container',							
							defaults: {							
								scale: 'medium',							
								margin: '0 5 0 0'							
							},							
							itemId: 'tbTop',							
							width: 320,							
							layout: {
								type: 'hbox',								
								align: 'middle',								
								padding: '5'								
							},							
							items: [
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/save.png',									
									itemId: 'btnSaveAll',									
									tooltip: 'Save all changes'									
								},								
								{
									xtype: 'natbutton',									
									hidden: true,									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/cancel.png',									
									itemId: 'btnCancel',									
									tooltip: 'Cancel current edited object\'s changes'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/refresh1.png',									
									itemId: 'btnRefresh',									
									tooltip: 'Refresh'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/lightning.png',									
									itemId: 'btnGenerate',									
									tooltip: 'Generate source code'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/24/code.png',									
									itemId: 'btnOpenRepository',									
									tooltip: 'Open Github repository'									
								}								
							]							
						},						
						{
							xtype: 'Toolbox',							
							flex: 1,							
							itemId: 'toolbox'							
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
					collapsible: true,					
					hideCollapseTool: true,					
					itemId: 'tabSolution',					
					preventHeader: true,					
					region: 'west',					
					split: true,					
					width: 320					
				},				
				{
					xtype: 'PropertyForm',					
					collapsible: true,					
					itemId: 'PropertyForm',					
					region: 'east',					
					split: true,					
					width: 500					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
