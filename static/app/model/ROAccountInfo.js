Ext.define('natcreator.model.ROAccountInfo', { 
	extend: 'natcreator.model.RequestObject'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'hasGithubToken', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
