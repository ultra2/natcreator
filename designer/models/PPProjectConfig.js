Ext.define('designer.model.PPProjectConfig', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
	]
	,associations: [
		{ type: 'belongsTo', name: 'generationSteps', model: 'designer.model.PPGenerationStep' }
	]
	,validations: [
		{ field: 'generationSteps_id', type: 'presence' }
	]
});
