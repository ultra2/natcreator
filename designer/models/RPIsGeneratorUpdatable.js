Ext.define('designer.model.RPIsGeneratorUpdatable', { 
	extend: 'designer.model.RequestPost',
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
