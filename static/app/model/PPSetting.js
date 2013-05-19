Ext.define('natcreator.model.PPSetting', { 
	extend: 'natcreator.model.PersistentProject'
	
	,fields: [
		{ name: 'generationTarget', type: 'string', defaultValue: 'zip' }
		,{ name: 'githubRepository', type: 'string' }
		,{ name: 'codeGenerationWindowCloseOnSuccessful', type: 'boolean', defaultValue: 'true' }
		,{ name: 'fontSize', type: 'int', defaultValue: '18' }
		,{ name: 'herokuApp', type: 'string' }
		,{ name: 'propertyFormShowCommonConfigs', type: 'boolean', defaultValue: 'true' }
		,{ name: 'propertyFormShowConfigsInAlphabeticalOrder', type: 'boolean', defaultValue: 'true' }
		,{ name: 'toolbox', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generationTarget', type: 'presence' }
		,{ field: 'fontSize', type: 'presence' }
	]
});
