Ext.define('web.model.RPUpdateGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPUpdateGenerator'
	
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
