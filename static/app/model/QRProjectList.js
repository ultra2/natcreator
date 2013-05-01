Ext.define('natcreator.model.QRProjectList', { 
	extend: 'NAT.data.QueryModel'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'version', type: 'int' }
		,{ name: 'roleName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'roleName', type: 'presence' }
	]
});
