Ext.define('web.model.RPAcquireGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPAcquireGenerator'
	
	,fields: [
		{ name: 'generatorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generatorId', type: 'presence' }
	]
});
