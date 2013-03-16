Ext.define('designer.model.RGActivate', { 
	extend: 'designer.model.RequestGet'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
});
