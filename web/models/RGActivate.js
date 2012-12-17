Ext.define('web.model.RGActivate', { 
	extend: 'web.model.RequestGet',
	alias: 'RGActivate'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
});
