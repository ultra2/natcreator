Ext.define('natcreator.view.Designer', { 
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
							xtype: 'Toolbox',							
							flex: 1,							
							itemId: 'toolbox'							
						}						
					]					
				},				
				{
					xtype: 'tabpanel',					
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
					xtype: 'PropertyTree',					
					collapsible: true,					
					itemId: 'PropertyForm',					
					region: 'east',					
					split: true,					
					width: 500					
				},				
				{
					xtype: 'HelpForm',					
					closable: true,					
					closeAction: 'hide',					
					collapsible: true,					
					height: 300,					
					hidden: true,					
					itemId: 'HelpForm',					
					region: 'south',					
					split: true,					
					title: 'Help'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
