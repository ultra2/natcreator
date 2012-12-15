Ext.define('web.model.PMAccount', { 
	extend: 'web.model.PersistentMaster',
	alias: 'PMAccount'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'passwordSalt', type: 'string' }
		,{ name: 'passwordHash', type: 'string' }
		,{ name: 'email', type: 'string' }
		,{ name: 'resetPasswordKey', type: 'string' }
		,{ name: 'isLocal', type: 'boolean' }
		,{ name: 'googleId', type: 'string' }
		,{ name: 'lastLoginDate', type: 'date', defaultValue: new Date(0) }
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
