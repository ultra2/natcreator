Ext.define('undefinedRPIsGeneratorUpdatable', { 
	extend: 'undefinedRequestPost',
	alias: 'RPIsGeneratorUpdatable'
	
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
