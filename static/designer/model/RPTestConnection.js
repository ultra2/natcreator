Ext.define('designer.model.RPTestConnection', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPTestConnection'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'password', type: 'string' }
		,{ name: 'server', type: 'string' }
		,{ name: 'database', type: 'string' }
		,{ name: 'port', type: 'int' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'password', type: 'presence' }
		,{ field: 'server', type: 'presence' }
		,{ field: 'database', type: 'presence' }
		,{ field: 'port', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPTestConnection'));
