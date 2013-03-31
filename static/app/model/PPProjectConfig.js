Ext.define('natcreator.model.PPProjectConfig', { 
	extend: 'natcreator.model.PersistentProject'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
		,{ name: 'solutionExplorer', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
