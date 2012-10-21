Ext.define('designer.model.PMAccount', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMAccount'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'passwordSalt', type: 'string', debug: true }
		,{ name: 'passwordHash', type: 'string', debug: true }
		,{ name: 'email', type: 'string', debug: true }
		,{ name: 'resetPasswordKey', type: 'string', debug: true }
		,{ name: 'isLocal', type: 'boolean', debug: true }
		,{ name: 'googleId', type: 'string', debug: true }
		,{ name: 'lastLoginDate', type: 'date', defaultValue: new Date(0), debug: true }
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
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMAccount'));
