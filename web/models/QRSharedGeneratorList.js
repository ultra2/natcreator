Ext.define('undefinedQRSharedGeneratorList', { 
	extend: 'undefinedQueryResult',
	alias: 'QRSharedGeneratorList'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'generatorVersion', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'generatorVersion', type: 'presence' }
	]
	,fieldInfos: [
	]
});
