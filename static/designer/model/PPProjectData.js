Ext.define('designer.model.PPProjectData', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectData'
	
	,fields: [
		{ name: 'deployToHerokuStatus', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectData'));
