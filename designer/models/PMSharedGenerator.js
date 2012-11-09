Ext.define('designer.model.PMSharedGenerator', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMSharedGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'originProject_id', type: 'string' }
		,{ name: 'originGenerator_id', type: 'string' }
		,{ name: 'generatorVersion', type: 'string', defaultValue: '1.0' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'originProject_id', type: 'presence' }
		,{ field: 'originGenerator_id', type: 'presence' }
		,{ field: 'generatorVersion', type: 'presence' }
	]
	,fieldInfos: [
	]
});
