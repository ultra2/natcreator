Ext.define('web.model.PPGenerationStep', { 
	alias: 'PPGenerationStep'
	extend: 'web.model.PersistentProject',
	
	,fields: [
		{ name: 'generator_id', type: 'string' }
		,{ name: 'path', type: 'string' }
		,{ name: 'projectSetting_id', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
		,{ name: 'active', type: 'boolean' }
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
