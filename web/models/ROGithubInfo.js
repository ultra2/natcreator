Ext.define('web.model.ROGithubInfo', { 
	extend: 'web.model.RequestObject',
	alias: 'ROGithubInfo'
	
	,fields: [
		{ name: 'isAuthorized', type: 'boolean' }
		,{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'isAuthorized', type: 'presence' }
		,{ field: 'username', type: 'presence' }
	]
	,fieldInfos: [
	]
});
