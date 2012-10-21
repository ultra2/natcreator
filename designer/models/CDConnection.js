Ext.define('designer.model.CDConnection', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDConnection'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'password', type: 'string', debug: true }
		,{ name: 'database', type: 'string', debug: true }
		,{ name: 'server', type: 'string', debug: true }
		,{ name: 'port', type: 'int', debug: true }
		,{ name: 'url', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'password', type: 'presence' }
		,{ field: 'database', type: 'presence' }
		,{ field: 'server', type: 'presence' }
		,{ field: 'port', type: 'presence' }
		,{ field: 'url', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDConnection'));
