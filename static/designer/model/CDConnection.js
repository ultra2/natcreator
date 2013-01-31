Ext.define('designer.model.CDConnection', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDConnection'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'password', type: 'string' }
		,{ name: 'database', type: 'string' }
		,{ name: 'server', type: 'string' }
		,{ name: 'port', type: 'int' }
		,{ name: 'url', type: 'string' }
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
});
