Ext.define('natcreator.model.PMAccount', { 
	extend: 'natcreator.model.PersistentMaster'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'passwordSalt', type: 'string' }
		,{ name: 'passwordHash', type: 'string' }
		,{ name: 'email', type: 'string' }
		,{ name: 'resetPasswordKey', type: 'string' }
		,{ name: 'isLocal', type: 'boolean' }
		,{ name: 'googleId', type: 'string' }
		,{ name: 'lastLoginDate', type: 'date', defaultValue: new Date(0) }
		,{ name: 'herokuApiKey', type: 'string' }
		,{ name: 'herokuPrivateKey', type: 'string' }
		,{ name: 'herokuPublicKey', type: 'string' }
		,{ name: 'githubToken', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'passwordSalt', type: 'presence' }
		,{ field: 'passwordHash', type: 'presence' }
		,{ field: 'email', type: 'presence' }
		,{ field: 'resetPasswordKey', type: 'presence' }
		,{ field: 'isLocal', type: 'presence' }
		,{ field: 'googleId', type: 'presence' }
		,{ field: 'lastLoginDate', type: 'presence' }
	]
});
