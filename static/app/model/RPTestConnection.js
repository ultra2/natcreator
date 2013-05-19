Ext.define('natcreator.model.RPTestConnection', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'username', type: 'string', persist: false }
		,{ name: 'password', type: 'string', persist: false }
		,{ name: 'server', type: 'string', persist: false }
		,{ name: 'database', type: 'string', persist: false }
		,{ name: 'port', type: 'int', persist: false }
		,{ name: 'url', type: 'string' }
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
