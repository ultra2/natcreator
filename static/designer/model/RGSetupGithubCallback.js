Ext.define('designer.model.RGSetupGithubCallback', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGSetupGithubCallback'
	
	,fields: [
		{ name: 'code', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'code', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGSetupGithubCallback'));
