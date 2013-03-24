Ext.define('designer.view.generated.Viewport', { 
	extend: 'Ext.container.Viewport',
	alias: 'widget.Viewport',
	
	layout: {
		type: 'border'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'container',					
					height: 27,					
					itemId: 'contHeader',					
					region: 'north',					
					style: 'background-color: gray',					
					layout: {
						type: 'border'						
					},					
					items: [
						{
							xtype: 'container',							
							defaults: {							
								ui: 'gray',							
								margin: '2 0 2 5',							
								autoWidth: true							
							},							
							itemId: 'tbApp',							
							region: 'west',							
							width: 400,							
							layout: {
								type: 'hbox',								
								align: 'stretch'								
							},							
							items: [
								{
									xtype: 'natbutton',									
									itemId: 'menuProject',									
									text: 'Project',									
									menu: {
										xtype: 'menu',										
										width: 220,										
										items: [
											{
												xtype: 'menuitem',												
												itemId: 'btnNewProject',												
												text: 'New Project...'												
											},											
											{
												xtype: 'menuitem',												
												itemId: 'btnProjectManager',												
												text: 'Project Manager...'												
											},											
											{
												xtype: 'menuitem',												
												itemId: 'btnCloseProject',												
												text: 'Close Project'												
											}											
										]										
									}									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnSendQuestion',									
									text: 'Support',									
									ui: 'green'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/save.png',									
									itemId: 'btnSaveAll',									
									tooltip: 'Save all changes'									
								},								
								{
									xtype: 'natbutton',									
									hidden: true,									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/cancel.png',									
									itemId: 'btnCancel',									
									tooltip: 'Cancel current edited object\'s changes'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/refresh1.png',									
									itemId: 'btnRefresh',									
									tooltip: 'Refresh'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/lightning.png',									
									itemId: 'btnGenerate',									
									tooltip: 'Generate source code'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/code.png',									
									itemId: 'btnOpenRepository',									
									tooltip: 'Open Github repository'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/tools-16.png',									
									itemId: 'btnSettings',									
									tooltip: 'Project Settings'									
								}								
							]							
						},						
						{
							xtype: 'natbutton',							
							allowDepress: false,							
							autoWidth: true,							
							enableToggle: true,							
							itemId: 'btnProject',							
							pressed: true,							
							region: 'center',							
							ui: 'gray'							
						},						
						{
							xtype: 'container',							
							defaults: {							
								ui: 'gray',							
								margin: '2 5 2 0',							
								autoWidth: true							
							},							
							itemId: 'tbWeb',							
							region: 'east',							
							width: 400,							
							layout: {
								type: 'hbox',								
								align: 'stretch',								
								pack: 'end'								
							},							
							items: [
								{
									xtype: 'natbutton',									
									itemId: 'btnHome',									
									text: 'Home'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnDocumentation',									
									text: 'Documentation'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnLogin',									
									text: 'Login'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnRegister',									
									text: 'Register'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'menuAccount',									
									menu: {
										xtype: 'menu',										
										minWidth: 220,										
										width: 120,										
										items: [
											{
												xtype: 'menuitem',												
												itemId: 'btnSettings',												
												text: 'Settings'												
											},											
											{
												xtype: 'menuitem',												
												itemId: 'btnChangePassword',												
												text: 'Change Password'												
											},											
											{
												xtype: 'menuitem',												
												itemId: 'btnLogout',												
												text: 'Log Out'												
											}											
										]										
									}									
								}								
							]							
						}						
					]					
				},				
				{
					xtype: 'container',					
					itemId: 'contProjectEditor',					
					region: 'center',					
					layout: {
						type: 'card'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
