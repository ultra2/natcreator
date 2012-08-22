Ext.define('undefinedPPProjectSetting', { 
	extend: 'undefinedPersistentProject',
	alias: 'PPProjectSetting'
	
	,fields: [
		{ name: 'repositoryName', type: 'string' }
		,{ name: 'repositoryHost', type: 'string' }
		,{ name: 'fontSize', type: 'int' }
		,{ name: 'githubUserName', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'undefinedPPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'repositoryName', type: 'presence' }
		,{ field: 'repositoryHost', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
		,{ field: 'generationSteps', type: 'presence' }
		,{ field: 'githubUserName', type: 'presence' }
		,{ field: 'codeGenerationWindowCloseOnSuccessful', type: 'presence' }
	]
	,fieldInfos: [
	]
});
