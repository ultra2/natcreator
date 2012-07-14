Ext.define('designer.model.QRLookup', { 
	alias: 'QRLookup'
	extend: 'designer.model.QueryResult',
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
