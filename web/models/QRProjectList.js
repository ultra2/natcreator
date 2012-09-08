Ext.define('web.model.QRProjectList', { 
	extend: 'web.model.QueryResult',
	alias: 'QRProjectList'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'roleName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'roleName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
