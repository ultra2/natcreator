Ext.define('undefinedRPResetPasswordRequest', { 
	extend: 'undefinedRequestPost',
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
	,fieldInfos: [
	]
});
