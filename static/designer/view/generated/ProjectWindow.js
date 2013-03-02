Ext.define('designer.view.generated.ProjectWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectWindow',
	
	activeItem: '1',
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
							itemId: 'gridProjectTemplates',							
							title: 'Project Templates',							
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
								}								
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
								,								
																
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
