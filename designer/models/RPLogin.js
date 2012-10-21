Ext.define('designer.model.RPLogin', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPLogin'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'password', type: 'string', debug: true }
		,{ name: 'rememberMe', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'password', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPLogin'));
