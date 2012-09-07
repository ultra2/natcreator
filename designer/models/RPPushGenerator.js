Ext.define('designer.model.RPPushGenerator', { 
	extend: 'designer.model.RequestPost',
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
