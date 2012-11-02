Ext.define('web.model.RPIsGeneratorUpdatable', { 
	extend: 'web.model.RequestPost',
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
