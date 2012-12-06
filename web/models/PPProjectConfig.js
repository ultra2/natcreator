Ext.define('web.model.PPProjectConfig', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
	]
	,associations: [
		{ type: 'belongsTo', name: 'generationSteps', model: 'web.model.PPGenerationStep' }
	]
	,validations: [
		{ field: 'generationSteps_id', type: 'presence' }
	]
});
