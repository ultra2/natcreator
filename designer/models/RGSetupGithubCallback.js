Ext.define('designer.model.RGSetupGithubCallback', { 
	alias: 'RGSetupGithubCallback'
	extend: 'designer.model.RequestGet',
	
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
