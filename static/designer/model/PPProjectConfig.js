Ext.define('designer.model.PPProjectConfig', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
		{ name: 'toolbox', type: 'auto' }
		,{ name: 'solutionExplorer', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectConfig'));
