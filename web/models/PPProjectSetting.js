Ext.define('undefinedPPProjectSetting', { 
	extend: 'undefinedPersistentProject',
	alias: 'PPProjectSetting'
	
	,fields: [
		{ name: 'generationTarget', type: 'string', defaultValue: 'zip' }
		,{ name: 'githubUser', type: 'string' }
		,{ name: 'githubRepository', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean' }
		,{ name: 'includeTemplateFilesIntoGeneration', type: 'boolean', defaultValue: true }
		,{ name: 'fontSize', type: 'int', defaultValue: '18' }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'undefinedPPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'generationSteps', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
	,fieldInfos: [
	]
});
