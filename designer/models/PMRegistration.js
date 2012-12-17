Ext.define('designer.model.PMRegistration', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMRegistration'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'passwordSalt', type: 'string' }
		,{ name: 'passwordHash', type: 'string' }
		,{ name: 'email', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'passwordSalt', type: 'presence' }
		,{ field: 'passwordHash', type: 'presence' }
		,{ field: 'email', type: 'presence' }
	]
});
