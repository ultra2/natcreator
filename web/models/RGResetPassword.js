Ext.define('web.model.RGResetPassword', { 
	extend: 'web.model.RequestGet',
	alias: 'RGResetPassword'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
});
