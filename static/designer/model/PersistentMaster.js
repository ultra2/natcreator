Ext.define('designer.model.PersistentMaster', { 
	extend: 'NAT.data.Model',
	alias: 'PersistentMaster'
	
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
