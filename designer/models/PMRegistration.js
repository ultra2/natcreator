Ext.define('designer.model.PMRegistration', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMRegistration'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'passwordSalt', type: 'string', debug: true }
		,{ name: 'passwordHash', type: 'string', debug: true }
		,{ name: 'email', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'passwordSalt', type: 'presence' }
		,{ field: 'passwordHash', type: 'presence' }
		,{ field: 'email', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMRegistration'));
