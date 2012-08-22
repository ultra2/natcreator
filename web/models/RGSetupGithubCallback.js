Ext.define('undefinedRGSetupGithubCallback', { 
	extend: 'undefinedRequestGet',
	alias: 'RGSetupGithubCallback'
	
	,fields: [
		{ name: 'code', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'code', type: 'presence' }
	]
	,fieldInfos: [
	]
});
