Ext.define('designer.model.ROAccountInfo', { 
	extend: 'designer.model.RequestObject',
	alias: 'ROAccountInfo'
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'hasGithubToken', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.ROAccountInfo'));
