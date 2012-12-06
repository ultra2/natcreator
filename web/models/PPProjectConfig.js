Ext.define('web.model.PPProjectConfig', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'web.model.PPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'generationSteps_id', type: 'presence' }
	]
});
