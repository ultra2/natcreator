Ext.define('web.model.ROAccountInfo', { 
	alias: 'ROAccountInfo'
	extend: 'web.model.RequestObject',
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'hasGithubToken', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'hasGithubToken', type: 'presence' }
	]
	,fieldInfos: [
	]
});
