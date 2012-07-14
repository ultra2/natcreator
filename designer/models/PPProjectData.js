Ext.define('designer.model.PPProjectData', { 
	alias: 'PPProjectData'
	extend: 'designer.model.PersistentProject',
	
	,fields: [
		{ name: 'githubToken', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'githubToken', type: 'presence' }
	]
	,fieldInfos: [
	]
});
