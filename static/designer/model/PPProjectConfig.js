Ext.define('designer.model.PPProjectConfig', { 
	extend: 'designer.model.PersistentProject'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
		,{ name: 'solutionExplorer', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
