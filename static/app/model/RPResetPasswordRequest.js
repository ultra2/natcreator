Ext.define('natcreator.model.RPResetPasswordRequest', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'email', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'email', type: 'presence' }
		,{ field: 'email', type: 'email' }
	]
});
