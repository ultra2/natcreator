Ext.define('designer.model.RPUpdateGenerator', { 
	extend: 'designer.model.RequestPost',
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
