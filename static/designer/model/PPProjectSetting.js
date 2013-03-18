Ext.define('designer.model.PPProjectSetting', { 
	extend: 'designer.model.PersistentProject'
	
	,fields: [
		{ name: 'generationTarget', type: 'string', defaultValue: 'zip' }
		,{ name: 'githubRepository', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean', defaultValue: 'true' }
		,{ name: 'includeTemplateFilesIntoGeneration', type: 'boolean', defaultValue: 'true' }
		,{ name: 'fontSize', type: 'int', defaultValue: '18' }
		,{ name: 'githubTemplateRepository', type: 'string' }
		,{ name: 'herokuApp', type: 'string' }
		,{ name: 'propertyFormShowCommonConfigs', type: 'boolean', defaultValue: 'true' }
		,{ name: 'propertyFormShowConfigsInAlphabeticalOrder', type: 'boolean', defaultValue: 'true' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
});