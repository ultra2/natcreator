Ext.define('designer.model.ROGithubInfo', { 
	extend: 'designer.model.RequestObject',
	alias: 'ROGithubInfo'
	
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
