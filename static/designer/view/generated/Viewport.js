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
					itemId: 'contHeader',					
					region: 'north',					
					height: 25,					
					style: 'background-color: gray',					
					layout: {
						type: 'border'						
					},					
					items: [
						{
							xtype: 'container',							
							itemId: 'tbApp',							
							region: 'west',							
							width: 400,							
							defaults: {							
								ui: 'gray',							
								margin: '2 0 2 5',							
								autoWidth: true							
							},							
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
									ui: 'green',									
									text: 'Support'									
								}								
							]							
						},						
						{
							xtype: 'natbutton',							
							region: 'center',							
							ui: 'gray',							
							autoWidth: true,							
							enableToggle: true,							
							allowDepress: false,							
							pressed: true,							
							itemId: 'btnProject'							
						},						
						{
							xtype: 'container',							
							itemId: 'tbWeb',							
							region: 'east',							
							width: 400,							
							defaults: {							
								ui: 'gray',							
								margin: '2 5 2 0',							
								autoWidth: true							
							},							
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
