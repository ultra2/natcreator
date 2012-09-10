Ext.define('web.model.PersistentMaster', { 
	extend: 'web.model.CRBaseObject',
	alias: 'PersistentMaster'
	
	,fields: [
		{ name: 'created', type: 'date', debug: true }
		,{ name: 'modified', type: 'date', debug: true }
		,{ name: 'version', type: 'int', debug: true }
		,{ name: 'deleted', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});