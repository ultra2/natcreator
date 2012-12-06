Ext.define('web.model.RPAcceptGeneratorSource', { 
	extend: 'web.model.RequestPost',
	alias: 'RPAcceptGeneratorSource'
	
	,fields: [
		{ name: 'generatorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generatorId', type: 'presence' }
	]
});
