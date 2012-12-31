Ext.define('designer.model.RGResetPassword', { 
	extend: 'designer.model.RequestGet',
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
