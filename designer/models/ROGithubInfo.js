Ext.define('designer.model.ROGithubInfo', { 
	alias: 'ROGithubInfo'
	extend: 'designer.model.RequestObject',
	
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
