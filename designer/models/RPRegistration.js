Ext.define('designer.model.RPRegistration', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPRegistration'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'email', type: 'string', debug: true }
		,{ name: 'password', type: 'string', debug: true }
		,{ name: 'confirmPassword', type: 'string', persist: false, debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'username', type: 'length', min: 6, max: 20 }
		,{ field: 'email', type: 'presence' }
		,{ field: 'email', type: 'email' }
		,{ field: 'password', type: 'presence' }
		,{ field: 'password', type: 'length', min: 6, max: 20 }
		,{ field: 'confirmPassword', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPRegistration'));
