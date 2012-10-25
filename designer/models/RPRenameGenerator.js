Ext.define('undefinedRPRenameGenerator', { 
	extend: 'undefinedRequestPost',
	alias: 'RPRenameGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'generatorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'format', matcher: /^([\w\-\.])+$/ }
		,{ field: 'generatorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
