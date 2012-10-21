Ext.define('designer.model.PPProjectData', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectData'
	
	,fields: [
		{ name: 'githubToken', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'githubToken', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectData'));
