Ext.define('natcreator.view.ProjectSettingsForm', { 
	extend: 'Ext.tab.Panel',
	alias: 'widget.ProjectSettingsForm',
	
	bodyPadding: 10,
	closable: true,
	preventHeader: true,
	title: 'Project Settings',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					defaults: {					
						labelPad: 0					
					},					
					itemId: 'edEnvironmentSettings',					
					title: 'Environment',					
					items: [
						{
							xtype: 'natcombobox',							
							comboData: [8,9,10,11,12,14,16,18,20,22,24,26,28,36,42,72],							
							editable: false,							
							fieldLabel: 'Font Size',							
							itemId: 'cbFontSize',							
							labelWidth: 80,							
							propertyPath: 'fontSize',							
							width: 160							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Include template files into generation',							
							labelWidth: 250,							
							propertyPath: 'includeTemplateFilesIntoGeneration'							
						}						
					],					
					layout: {
						type: 'anchor'						
					}					
				},				
				{
					xtype: 'natform',					
					itemId: 'edCodeGenerationTarget',					
					title: 'Code Generation Target',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'fieldset',							
							height: 100,							
							itemId: 'fsZip',							
							title: 'Zip',							
							items: [
								{
									xtype: 'natradiofield',									
									boxLabel: 'Download the generated source code as zip file',									
									itemId: 'rdZip',									
									propertyPath: 'generationTarget',									
									propertyValue: 'zip'									
								}								
							]							
						},						
						{
							xtype: 'fieldset',							
							height: 140,							
							itemId: 'fsHeroku',							
							title: 'Deploy To Heroku',							
							items: [
								{
									xtype: 'natradiofield',									
									boxLabel: 'Deploy the generated source code to Heroku',									
									itemId: 'rdHeroku',									
									propertyPath: 'generationTarget',									
									propertyValue: 'heroku'									
								},								
								{
									xtype: 'nattextfield',									
									fieldLabel: 'Heroku App',									
									itemId: 'txtHerokuApp',									
									margin: '10 0 0 0',									
									propertyPath: 'herokuApp',									
									readOnly: true,									
									width: 400									
								},								
								{
									xtype: 'natbutton',									
									autoWidth: true,									
									itemId: 'btnCreateHerokuApp',									
									margin: '10 0 0 0',									
									text: 'Create App',									
									ui: 'green'									
								},								
								{
									xtype: 'natbutton',									
									autoWidth: true,									
									itemId: 'btnOpenHerokuApp',									
									margin: '10 0 0 10',									
									text: 'Open App',									
									ui: 'green'									
								}								
							]							
						},						
						{
							xtype: 'fieldset',							
							height: 200,							
							itemId: 'fsGithub',							
							title: 'Export To Github',							
							items: [
								{
									xtype: 'natradiofield',									
									boxLabel: 'Export the generated source code to Github repository',									
									itemId: 'rdGithub',									
									propertyPath: 'generationTarget',									
									propertyValue: 'github'									
								},								
								{
									xtype: 'nattextfield',									
									fieldLabel: 'Repository',									
									itemId: 'txtGithubRepository',									
									margin: '10 0 0 0',									
									propertyPath: 'githubRepository',									
									width: 400									
								},								
								{
									xtype: 'natbutton',									
									autoWidth: true,									
									itemId: 'btnOpenRepository',									
									margin: '10 0 0 0',									
									text: 'Open Repository',									
									ui: 'green'									
								}								
							]							
						}						
					]					
				},				
				{
					xtype: 'panel',					
					itemId: 'pnlPackages',					
					title: 'Packages',					
					dockedItems: [
						{
							xtype: 'toolbar',							
							dock: 'top',							
							items: [
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/add.png',									
									itemId: 'btnInstall',									
									tooltip: 'Install package'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',									
									itemId: 'btnUninstall',									
									tooltip: 'Uninstall package'									
								}								
							]							
						}						
					],					
					items: [
						{
							xtype: 'natgrid',							
							columns: [
								{
									xtype: 'gridcolumn',									
									dataIndex: 'name',									
									text: 'Name',									
									width: 200									
								},								
								{
									xtype: 'numbercolumn',									
									dataIndex: 'version',									
									text: 'Version'									
								}								
							]							
						}						
					],					
					layout: {
						type: 'fit'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
