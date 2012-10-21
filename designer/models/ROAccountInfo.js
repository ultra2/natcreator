Ext.define('designer.model.ROAccountInfo', { 
	extend: 'designer.model.RequestObject',
	alias: 'ROAccountInfo'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
		,{ name: 'hasGithubToken', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'hasGithubToken', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.ROAccountInfo'));
