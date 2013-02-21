Ext.define('designer.model.RPDeployFilesToHeroku', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
	]
	,associations: [
	]
	,validations: [
		{ field: 'files', type: 'presence' }
	]
});
