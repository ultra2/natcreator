Ext.define('designer.model.PPProjectSetting', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectSetting'
	
	,fields: [
		{ name: 'generationTarget', type: 'string', defaultValue: 'zip' }
		,{ name: 'githubRepository', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean' }
		,{ name: 'includeTemplateFilesIntoGeneration', type: 'boolean', defaultValue: 'true' }
		,{ name: 'fontSize', type: 'int', defaultValue: '18' }
		,{ name: 'githubTemplateRepository', type: 'string' }
		,{ name: 'herokuApp', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectSetting'));
