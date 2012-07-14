Ext.define('web.model.RGResetPassword', { 
	alias: 'RGResetPassword'
	extend: 'web.model.RequestGet',
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
	,fieldInfos: [
	]
});
