Ext.define('designer.model.RPResetPasswordRequest', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPResetPasswordRequest'
	
	,fields: [
		{ name: 'email', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'email', type: 'presence' }
		,{ field: 'email', type: 'email' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPResetPasswordRequest'));
