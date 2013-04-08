Ext.define('natcreator.model.RGSetupGithubCallback', { 
	extend: 'natcreator.model.RequestGet'
	
	,fields: [
		{ name: 'code', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'code', type: 'presence' }
	]
});
