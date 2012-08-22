Ext.define('web.model.PPGenerationStep', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPGenerationStep'
	
	,fields: [
		{ name: 'generator_id', type: 'string' }
		,{ name: 'path', type: 'string', defaultValue: '/' }
		,{ name: 'projectSetting_id', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean', defaultValue: true }
		,{ name: 'active', type: 'boolean', defaultValue: true }
		,{ name: 'params', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generator_id', type: 'presence' }
		,{ field: 'path', type: 'presence' }
		,{ field: 'projectSetting_id', type: 'presence' }
		,{ field: 'deleteDirectory', type: 'presence' }
		,{ field: 'active', type: 'presence' }
		,{ field: 'params', type: 'presence' }
	]
	,fieldInfos: [
	]
});
