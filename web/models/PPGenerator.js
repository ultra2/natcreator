Ext.define('undefinedPPGenerator', { 
	extend: 'undefinedPersistentProject',
	alias: 'PPGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', debug: true }
		,{ name: 'originRepo', type: 'string' }
		,{ name: 'originPath', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'source', type: 'presence' }
		,{ field: 'originRepo', type: 'presence' }
		,{ field: 'originPath', type: 'presence' }
	]
	,fieldInfos: [
	]
});
