Ext.define('designer.model.PPProjectConfig', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
		,{ name: 'solutionExplorer', type: 'auto' }
	]
	,associations: [
		{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.PPGenerationStep' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'generationSteps_id', type: 'presence' }
	]
});
