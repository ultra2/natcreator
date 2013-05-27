Ext.define('natcreator.view.Viewport', { 
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
									itemId: 'btnProjectSaveAll',									
									text: 'Save',									
									tooltip: 'Save all changes',									
									ui: 'blue'									
								},								
								{
									xtype: 'natbutton',									
									hidden: true,									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/cancel.png',									
									itemId: 'btnProjectCancel',									
									tooltip: 'Cancel current edited object\'s changes'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/refresh1.png',									
									itemId: 'btnProjectRefresh',									
									tooltip: 'Refresh'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/lightning.png',									
									itemId: 'btnProjectGenerate',									
									tooltip: 'Generate source code'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/tools-16.png',									
									itemId: 'btnProjectSettings',									
									tooltip: 'Project Settings'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/document-delete.png',									
									itemId: 'btnProjectCloseAllWindows',									
									tooltip: 'Close All Windows'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/help.png',									
									itemId: 'btnProjectHelp',									
									tooltip: 'Show help'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/icon/github.png',									
									itemId: 'btnProjectOpenRepository',									
									tooltip: 'Open Github repository'									
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
									itemId: 'btnSupport',									
									text: 'Support'									
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
