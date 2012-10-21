Ext.define('designer.model.ROGithubInfo', { 
	extend: 'designer.model.RequestObject',
	alias: 'ROGithubInfo'
	
	,fields: [
		{ name: 'isAuthorized', type: 'boolean', debug: true }
		,{ name: 'username', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'isAuthorized', type: 'presence' }
		,{ field: 'username', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.ROGithubInfo'));
