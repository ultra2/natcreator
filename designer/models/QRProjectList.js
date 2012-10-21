Ext.define('designer.model.QRProjectList', { 
	extend: 'designer.model.QueryResult',
	alias: 'QRProjectList'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'roleName', type: 'string', debug: true }
		,{ name: 'isTemplate', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'roleName', type: 'presence' }
		,{ field: 'isTemplate', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.QRProjectList'));
