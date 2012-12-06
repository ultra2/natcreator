Ext.define('designer.model.PPProjectData', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectData'
	
	,fields: [
		{ name: 'githubToken', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'githubToken', type: 'presence' }
	]
});
