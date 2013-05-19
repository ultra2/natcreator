Ext.define('natcreator.view.ProjectSettingsForm', { 
	extend: 'NAT.tab.Panel',
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
					dataStore: 'natpersistentstore',					
					defaults: {					
						labelPad: 0					
					},					
					itemId: 'edEnvironmentSettings',					
					title: 'Environment',					
					layout: {
						type: 'anchor'						
					},					
					items: [
						{
							xtype: 'nattextfield',							
							dataField: 'generationTarget',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Generation Target&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'githubRepository',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Github Repository&nbsp;'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'includeTemplateFilesIntoGeneration',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Include Template Files Into Generation&nbsp;'							
						},						
						{
							xtype: 'natnumberfield',							
							dataField: 'fontSize',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Font Size&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'githubTemplateRepository',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Github Template Repository&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'herokuApp',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Heroku App&nbsp;'							
						}						
					]					
				},				
				{
					xtype: 'natform',					
					dataStore: 'natpersistentstore',					
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
									propertyValue: 'heroku'									
								},								
								{
									xtype: 'nattextfield',									
									fieldLabel: 'Heroku App',									
									itemId: 'txtHerokuApp',									
									margin: '10 0 0 0',									
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
									propertyValue: 'github'									
								},								
								{
									xtype: 'nattextfield',									
									fieldLabel: 'Repository',									
									itemId: 'txtGithubRepository',									
									margin: '10 0 0 0',									
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
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'generationTarget',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Generation Target&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'githubRepository',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Github Repository&nbsp;'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'includeTemplateFilesIntoGeneration',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Include Template Files Into Generation&nbsp;'							
						},						
						{
							xtype: 'natnumberfield',							
							dataField: 'fontSize',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Font Size&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'githubTemplateRepository',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Github Template Repository&nbsp;'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'herokuApp',							
							dataStore: 'natpersistentstore',							
							fieldLabel: 'Heroku App&nbsp;'							
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
									itemId: 'btnInstallPackage',									
									tooltip: 'Install package'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/delete.png',									
									itemId: 'btnUninstallPackage',									
									tooltip: 'Uninstall package'									
								},								
								{
									xtype: 'natbutton',									
									icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/refresh1.png',									
									itemId: 'btnUpdatePackage',									
									tooltip: 'Update Package'									
								},								
								{
									xtype: 'natbutton',									
									itemId: 'btnAutoUpdatePackage',									
									text: 'Set auto update'									
								}								
							]							
						}						
					],					
					items: [
						{
							xtype: 'natgrid',							
							dataStore: 'stInstalledPackages',							
							itemId: 'gridInstalledPackages',							
							columns: [
								{
									xtype: 'nattextcolumn',									
									dataField: 'name',									
									text: 'Name&nbsp;',									
									width: 200									
								},								
								{
									xtype: 'nattextcolumn',									
									dataField: 'description',									
									text: 'Description&nbsp;',									
									width: 400									
								},								
								{
									xtype: 'natnumbercolumn',									
									dataField: 'currentVersion',									
									text: 'Current Version&nbsp;',									
									width: 120									
								},								
								{
									xtype: 'natnumbercolumn',									
									dataField: 'availableVersion',									
									text: 'Available Version&nbsp;',									
									width: 120									
								},								
								{
									xtype: 'natcheckcolumn',									
									dataField: 'autoUpdate',									
									text: 'Auto Update&nbsp;',									
									width: 80									
								}								
							]							
						}						
					],					
					layout: {
						type: 'fit'						
					}					
				}				
			],			
			stores: [
				{
					xtype: 'natquerystore',					
					dataModel: 'QRInstalledPackage',					
					itemId: 'stInstalledPackages'					
				},				
				{
					xtype: 'natpersistentstore',					
					dataModel: 'PPSetting'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
