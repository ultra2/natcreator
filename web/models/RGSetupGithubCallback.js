Ext.define('web.model.RGSetupGithubCallback', { 
	alias: 'RGSetupGithubCallback'
	extend: 'web.model.RequestGet',
	
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
