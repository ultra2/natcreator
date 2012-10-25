Ext.define('undefinedQRLookup', { 
	extend: 'undefinedQueryResult',
	alias: 'QRLookup'
	
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
