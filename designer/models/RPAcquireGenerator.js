Ext.define('designer.model.RPAcquireGenerator', { 
	extend: 'designer.model.RequestPost',
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
