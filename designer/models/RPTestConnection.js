Ext.define('designer.model.RPTestConnection', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPTestConnection'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'password', type: 'string', debug: true }
		,{ name: 'server', type: 'string', debug: true }
		,{ name: 'database', type: 'string', debug: true }
		,{ name: 'port', type: 'int', debug: true }
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
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPTestConnection'));
