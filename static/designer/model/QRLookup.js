Ext.define('designer.model.QRLookup', { 
	extend: 'designer.model.QueryResult',
	alias: 'QRLookup'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
