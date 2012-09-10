Ext.define('designer.model.PMSharedGenerator', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMSharedGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'user', type: 'string' }
		,{ name: 'repo', type: 'string' }
		,{ name: 'path', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'user', type: 'presence' }
		,{ field: 'repo', type: 'presence' }
		,{ field: 'path', type: 'presence' }
	]
	,fieldInfos: [
	]
});
