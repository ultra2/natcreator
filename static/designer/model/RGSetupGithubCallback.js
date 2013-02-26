Ext.define('designer.model.RGSetupGithubCallback', { 
	extend: 'designer.model.RequestGet'
	
	,fields: [
		{ name: 'code', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'code', type: 'presence' }
	]
});
