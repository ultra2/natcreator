Ext.define('designer.model.RGActivate', { 
	extend: 'designer.model.RequestGet',
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
