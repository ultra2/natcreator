Ext.define('undefinedRPUpdateGenerator', { 
	extend: 'undefinedRequestPost',
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
