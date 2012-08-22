Ext.define('undefinedROAccountInfo', { 
	extend: 'undefinedRequestObject',
	alias: 'ROAccountInfo'
	
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
