Ext.define('web.model.RPResetPasswordRequest', { 
	extend: 'web.model.RequestPost',
	alias: 'RPResetPasswordRequest'
	
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
