Ext.define('web.model.PPProjectSetting', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPProjectSetting'
	
	,fields: [
		{ name: 'generationTarget', type: 'string' }
		,{ name: 'githubUser', type: 'string' }
		,{ name: 'githubRepository', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean' }
		,{ name: 'includeTemplateFilesIntoGeneration', type: 'boolean', defaultValue: true }
		,{ name: 'fontSize', type: 'int' }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'web.model.PPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'githubUser', type: 'presence' }
		,{ field: 'githubRepository', type: 'presence' }
		,{ field: 'generationSteps', type: 'presence' }
		,{ field: 'codeGenerationWindowCloseOnSuccessful', type: 'presence' }
		,{ field: 'includeTemplateFilesIntoGeneration', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
	,fieldInfos: [
	]
});
