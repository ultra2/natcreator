Ext.define('designer.view.generated.CodeGenerationTargetForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationTargetForm',
	
	layout: {
		type: 'fit'		
	},
	bodyPadding: 10,
	preventHeader: true,
	closable: true,
	title: 'Code Generation Target',
	
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
							title: 'Zip',							
							height: 100,							
							itemId: 'fsZip',							
							items: [
								{
									xtype: 'natradiofield',									
									boxLabel: 'Download the generated source code as zip file',									
									propertyValue: 'zip',									
									propertyPath: 'generationTarget',									
									itemId: 'rdZip'									
								}								
							]							
						},						
						{
							xtype: 'natfieldset',							
							title: 'Github',							
							height: 200,							
							itemId: 'fsGithub',							
							items: [
								{
									xtype: 'natradiofield',									
									boxLabel: 'Export the generated source code to Github repository',									
									propertyValue: 'github',									
									propertyPath: 'generationTarget',									
									itemId: 'rdGithub'									
								},								
								{
									xtype: 'label',									
									maxWidth: 450,									
									margin: '10 0 0 0',									
									itemId: 'lGihubInfo'									
								},								
								{
									xtype: 'natbutton',									
									text: 'Allow access',									
									ui: 'green',									
									maxWidth: 300,									
									itemId: 'btnSetupRepository'									
								},								
								{
									xtype: 'nattextfield',									
									fieldLabel: 'Repository',									
									width: 400,									
									margin: '10 0 0 0',									
									propertyPath: 'githubRepository',									
									itemId: 'txtGithubRepository'									
								},								
								{
									xtype: 'natbutton',									
									text: 'Open Repository',									
									ui: 'green',									
									maxWidth: 300,									
									itemId: 'btnOpenRepository'									
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
