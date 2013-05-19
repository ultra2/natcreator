Ext.define('natcreator.model.ROGithubInfo', { 
	extend: 'natcreator.model.RequestObject'
	
	,fields: [
		{ name: 'isAuthorized', type: 'boolean' }
		,{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
