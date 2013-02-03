Ext.define('designer.view.generated.ProjectWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectWindow',
	
	height: 560,
	width: 600,
	resizable: false,
	title: 'New Project',
	modal: true,
	layout: {
		type: 'card'		
	},
	activeItem: '1',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					dock: 'bottom',					
					cls: 'commandpanel',					
					height: 30,					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
					},					
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
							itemId: 'btnSave',							
							text: 'Save',							
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
					itemId: 'edProject0',					
					bodyPadding: 10,					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'natgrid',							
							itemId: 'gridProjectTemplates',							
							title: 'Project Templates',							
							flex: 1,							
							forceFit: true,							
							columns: [
								{
									xtype: 'gridcolumn',									
									width: 50,									
									dataIndex: 'name',									
									text: 'Name'									
								},								
								{
									xtype: 'gridcolumn',									
									dataIndex: 'description',									
									text: 'Description'									
								}								
							]							
						},						
						{
							xtype: 'nattextfield',							
							itemId: 'txtName',							
							propertyPath: 'name',							
							fieldLabel: 'Name',							
							labelWidth: 80							
						},						
						{
							xtype: 'nattextarea',							
							itemId: 'txtDescription',							
							propertyPath: 'description',							
							fieldLabel: 'Description',							
							labelWidth: 80							
						}						
					]					
				},				
				{
					xtype: 'natform',					
					itemId: 'edProject1',					
					bodyPadding: 10,					
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
							itemId: 'edConnection',							
							margins: '5 0 5 0',							
							height: 250,							
							layout: {
								type: 'vbox',								
								align: 'stretch'								
							},							
							items: [
								{
									xtype: 'natfieldset',									
									defaults: {									
										anchor: '100%'									
									},									
									items: [
										{
											xtype: 'nattextfield',											
											itemId: 'txtUrl',											
											propertyPath: 'url',											
											margin: '0',											
											fieldLabel: 'Url',											
											labelPad: 0,											
											labelWidth: 40											
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
									xtype: 'natfieldset',									
									defaults: {									
										anchor: '100%'									
									},									
									items: [
										{
											xtype: 'nattextfield',											
											itemId: 'txtServer',											
											propertyPath: 'server',											
											fieldLabel: 'Server'											
										},										
										{
											xtype: 'nattextfield',											
											itemId: 'intPort',											
											propertyPath: 'port',											
											fieldLabel: 'Port'											
										},										
										{
											xtype: 'nattextfield',											
											itemId: 'txtUsername',											
											propertyPath: 'username',											
											fieldLabel: 'Username'											
										},										
										{
											xtype: 'nattextfield',											
											itemId: 'txtPassword',											
											propertyPath: 'password',											
											fieldLabel: 'Password'											
										},										
										{
											xtype: 'nattextfield',											
											itemId: 'txtDatabase',											
											propertyPath: 'database',											
											fieldLabel: 'Database'											
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
					itemId: 'pnlProject2',					
					items: [
						{
							xtype: 'container',							
							itemId: 'contHeroku',							
							margin: '50 10',							
							items: [
								{
									xtype: 'textfield',									
									itemId: 'txtHerokuApiKey',									
									margin: '10',									
									width: 500,									
									fieldLabel: 'Heroku Api Key',									
									allowBlank: false									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnSetHerokuApiKey',									
									width: 50,									
									margin: '10',									
									ui: 'green',									
									text: 'Set'									
								}								
							],							
							layout: {
								type: 'hbox',								
								align: 'middle'								
							}							
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
