Ext.define('web.model.QRLookup', { 
	alias: 'QRLookup'
	extend: 'web.model.QueryResult',
	
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
