Ext.define('designer.model.RPAcceptGeneratorSource', { 
	extend: 'designer.model.RequestPost',
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
