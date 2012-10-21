Ext.define('designer.model.RGSetupGithubCallback', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGSetupGithubCallback'
	
	,fields: [
		{ name: 'code', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'code', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGSetupGithubCallback'));
