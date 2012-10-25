Ext.define('undefinedRPAcquireGenerator', { 
	extend: 'undefinedRequestPost',
	alias: 'RPAcquireGenerator'
	
	,fields: [
		{ name: 'generatorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generatorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
