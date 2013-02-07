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
