Ext.define('web.model.RPPushGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPPushGenerator'
	
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
