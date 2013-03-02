Ext.define('designer.model.QRProjectList', { 
	extend: 'designer.model.QueryResult'
	
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
