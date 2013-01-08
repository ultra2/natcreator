Ext.define('web.model.PersistentProject', { 
	extend: 'web.model.CRBaseObject',
	alias: 'PersistentProject'
	
	,fields: [
		{ name: 'created', type: 'date' }
		,{ name: 'modified', type: 'date' }
		,{ name: 'version', type: 'int' }
		,{ name: 'deleted', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});
