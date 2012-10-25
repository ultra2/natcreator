Ext.define('undefinedRPAcceptGeneratorSource', { 
	extend: 'undefinedRequestPost',
	alias: 'RPAcceptGeneratorSource'
	
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
