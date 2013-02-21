Ext.define('designer.view.generated.CodeGenerationTargetForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationTargetForm',
	
	title: 'Code Generation Target',
	closable: true,
	preventHeader: true,
	bodyPadding: 10,
	layout: {
		type: 'fit'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',					
					itemId: 'edSettings',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'natfieldset',							
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
							xtype: 'natfieldset',							
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
							xtype: 'natfieldset',							
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
				}				
			]			
		});
		me.callParent(arguments);
	}
});
