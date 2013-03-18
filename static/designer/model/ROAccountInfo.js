Ext.define('designer.model.ROAccountInfo', { 
	extend: 'designer.model.RequestObject'
	
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
