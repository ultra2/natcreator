Ext.define('designer.model.PMAccountProject', { 
	extend: 'designer.model.PersistentMaster'
	
	,fields: [
		{ name: 'account_id', type: 'string' }
		,{ name: 'project_id', type: 'string' }
		,{ name: 'role_id', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'account_id', type: 'presence' }
		,{ field: 'project_id', type: 'presence' }
		,{ field: 'role_id', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
});
