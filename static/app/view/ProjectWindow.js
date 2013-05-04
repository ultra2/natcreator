Ext.define('natcreator.view.ProjectWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectWindow',
	
	activeItem: 0,
	height: 560,
	layout: {
		type: 'card'		
	},
	modal: true,
	resizable: false,
	title: 'New Project',
	width: 600,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnTest',							
							text: 'Test'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnPrevious',							
							text: 'Previous'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnNext',							
							text: 'Next',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							text: 'Cancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					itemId: 'edProject0',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'natgrid',							
							flex: 1,							
							forceFit: true,							
							itemId: 'gridInstallPackages',							
							title: 'Available packages',							
							columns: [
								{
									xtype: 'gridcolumn',									
									dataIndex: 'name',									
									text: 'Name',									
									width: 50									
								},								
								{
									xtype: 'gridcolumn',									
									dataIndex: 'description',									
									text: 'Description'									
								},								
								{
									xtype: 'natcheckcolumn',									
									dataIndex: 'install',									
									text: 'Install',									
									width: 50,									
									editor: {
										xtype: 'natcheckboxfield'										
									}									
								}								
							],							
							plugins: [
								Ext.create('Ext.grid.plugin.CellEditing', {
									ptype: 'cellediting'									
								})								
							]							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Name',							
							itemId: 'txtName',							
							labelWidth: 80,							
							propertyPath: 'name'							
						},						
						{
							xtype: 'nattextarea',							
							fieldLabel: 'Description',							
							itemId: 'txtDescription',							
							labelWidth: 80,							
							propertyPath: 'description'							
						}						
					]					
				},				
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					itemId: 'edProject1',					
					title: 'MongoDB connection to project\'s metadata database',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'component',							
							html: 'You need to provide a MongoDB database connection where your project\'s metadata  will be stored. Your generated web application\'s data can be elsewhere.',							
							margins: '5 0 5 0'							
						},						
						{
							xtype: 'natform',							
							height: 250,							
							itemId: 'edConnection',							
							margins: '5 0 5 0',							
							layout: {
								type: 'vbox',								
								align: 'stretch'								
							},							
							items: [
								{
									xtype: 'fieldset',									
									defaults: {									
										anchor: '100%'									
									},									
									items: [
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Url',											
											itemId: 'txtUrl',											
											labelPad: 0,											
											labelWidth: 40,											
											margin: '0',											
											propertyPath: 'url'											
										},										
										{
											xtype: 'component',											
											cls: 'small-label',											
											html: 'mongodb://user:password@ds012345.mongolab.com:12345/databasename',											
											margin: '0 0 0 40'											
										}										
									]									
								},								
								{
									xtype: 'fieldset',									
									defaults: {									
										anchor: '100%'									
									},									
									items: [
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Server',											
											itemId: 'txtServer',											
											propertyPath: 'server'											
										},										
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Port',											
											itemId: 'intPort',											
											propertyPath: 'port'											
										},										
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Username',											
											itemId: 'txtUsername',											
											propertyPath: 'username'											
										},										
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Password',											
											itemId: 'txtPassword',											
											propertyPath: 'password'											
										},										
										{
											xtype: 'nattextfield',											
											fieldLabel: 'Database',											
											itemId: 'txtDatabase',											
											propertyPath: 'database'											
										}										
									]									
								}								
							]							
						},						
						{
							xtype: 'component',							
							html: 'You can register one for free at any of the next hosting providers:',							
							margins: '5 0 5 0'							
						},						
						{
							xtype: 'component',							
							html: '<a href="http://mongolab.com" target="_blank"><img src="https://extsolutions.herokuapp.com/graphics/logo/logo_mongolab.png"></a> <a href="http://mongohq.com" target="_blank"><img src="https://extsolutions.herokuapp.com/graphics/logo/logo_mongohq.png"></a>',							
							margins: '5 0 5 0'							
						}						
					]					
				},				
				{
					xtype: 'panel',					
					bodyPadding: 10,					
					itemId: 'pnlProject2',					
					items: [
						{
							xtype: 'component',							
							html: '<p><b>Do you want to test your working website instantly?</b></p><br>If you create an account on <a href="www.Heroku.com">Heroku</a> your generated website will be deployed and you can test it right away in a seperate browser window. Of course you can still download your source as zip file. Create a Heroku account is free and takes only 2 minutes. Follow the next steps:<br> <br><ul><li>1. Create an account on <a href="www.Heroku.com">Heroku</a></li><li>2. Go to account\'s page and copy paste your API Key to the box below</li><li>3. Click on set button</li></ul>'							
						},						
						{
							xtype: 'container',							
							itemId: 'contHeroku',							
							margin: '50 10',							
							items: [
								{
									xtype: 'textfield',									
									allowBlank: false,									
									fieldLabel: 'Heroku Api Key',									
									itemId: 'txtHerokuApiKey',									
									margin: '10',									
									width: 400									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnSetHerokuApiKey',									
									margin: '10',									
									text: 'Set',									
									ui: 'green',									
									width: 50									
								}								
							],							
							layout: {
								type: 'hbox',								
								align: 'middle'								
							}							
						},						
						{
							xtype: 'component',							
							html: 'If you skip this step you can do it later in account settings menu. <p>It\'s highly recommended to use this feature for convenience! </p>'							
						}						
					],					
					layout: {
						type: 'anchor'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
