Ext.define('undefinedPPProjectData', { 
	extend: 'undefinedPersistentProject',
	alias: 'PPProjectData'
	
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
