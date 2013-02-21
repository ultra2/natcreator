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
		{ field: 'account', type: 'presence' }
		,{ field: 'project', type: 'presence' }
		,{ field: 'role', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
});
