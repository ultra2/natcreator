Ext.define('natcreator.model.RGActivate', { 
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
