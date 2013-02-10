Ext.define('designer.model.PersistentProject', { 
	extend: 'NAT.data.Model',
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
