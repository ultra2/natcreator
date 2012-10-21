Ext.define('designer.model.PPProjectSetting', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectSetting'
	
	,fields: [
		{ name: 'generationTarget', type: 'string', defaultValue: 'zip', debug: true }
		,{ name: 'githubUser', type: 'string', debug: true }
		,{ name: 'githubRepository', type: 'string', debug: true }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean', debug: true }
		,{ name: 'includeTemplateFilesIntoGeneration', type: 'boolean', defaultValue: true, debug: true }
		,{ name: 'fontSize', type: 'int', defaultValue: '18', debug: true }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.PPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'generationSteps', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectSetting'));
