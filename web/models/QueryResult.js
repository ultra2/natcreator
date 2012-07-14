Ext.define('web.model.QueryResult', { 
	alias: 'QueryResult'
	extend: 'web.model.CRBaseObject',
	
	,fields: [
		{ name: 'created', type: 'date', defaultValue: new Date(0) }
		,{ name: 'modified', type: 'date', defaultValue: new Date(0) }
		,{ name: 'deleted', type: 'boolean' }
		,{ name: 'version', type: 'int' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'created', type: 'presence' }
		,{ field: 'modified', type: 'presence' }
		,{ field: 'deleted', type: 'presence' }
		,{ field: 'version', type: 'presence' }
	]
	,fieldInfos: [
	]
});
