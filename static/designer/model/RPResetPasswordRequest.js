Ext.define('designer.model.RPResetPasswordRequest', { 
	extend: 'designer.model.RequestPost',
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
