Ext.define('web.model.PPProjectData', { 
	alias: 'PPProjectData'
	extend: 'web.model.PersistentProject',
	
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
