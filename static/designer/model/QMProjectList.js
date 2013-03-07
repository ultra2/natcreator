Ext.define('designer.model.QMProjectList', { 
	extend: 'NAT.data.QueryModel'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'roleName', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'roleName', type: 'presence' }
	]
});
