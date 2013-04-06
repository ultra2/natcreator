Ext.define('natcreator.model.RGResetPassword', { 
	extend: 'natcreator.model.RequestGet'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
});
