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
							itemId: 'fsZip',
							height: 100,
							title: 'Zip',
							items: [
								{
									xtype: 'natradiofield',
									itemId: 'rdZip',
									propertyPath: 'generationTarget',
									propertyValue: 'zip',
									boxLabel: 'Download the generated source code as zip file'
								}
							]
						},
						{
							xtype: 'natfieldset',
							itemId: 'fsGithub',
							height: 200,
							title: 'Github',
							items: [
								{
									xtype: 'natradiofield',
									itemId: 'rdGithub',
									propertyPath: 'generationTarget',
									propertyValue: 'github',
									boxLabel: 'Export the generated source code to Github repository'
								},
								{
									xtype: 'label',
									itemId: 'lGihubInfo',
									margin: '10 0 0 0',
									maxWidth: 450
								},
								{
									xtype: 'button',
									itemId: 'btnSetupRepository',
									maxWidth: 300,
									ui: 'green',
									text: 'Allow access'
								},
								{
									xtype: 'textfield',
									itemId: 'txtGithubRepository',
									propertyPath: 'githubRepository',
									margin: '10 0 0 0',
									width: 400,
									fieldLabel: 'Repository'
								},
								{
									xtype: 'button',
									itemId: 'btnOpenRepository',
									maxWidth: 300,
									ui: 'green',
									text: 'Open Repository'
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