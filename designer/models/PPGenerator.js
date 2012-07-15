Ext.define('designer.model.PPGenerator', { 
	extend: 'designer.model.PersistentProject',
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
