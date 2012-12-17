Ext.define('web.model.PPGenerationStep', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPGenerationStep'
	
	,fields: [
		{ name: 'generator_id', type: 'string' }
		,{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
		,{ name: 'active', type: 'boolean', defaultValue: 'true' }
		,{ name: 'params', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generator_id', type: 'presence' }
		,{ field: 'path', type: 'presence' }
		,{ field: 'params', type: 'presence' }
	]
});
