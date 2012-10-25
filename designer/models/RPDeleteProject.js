Ext.define('undefinedRPDeleteProject', { 
	extend: 'undefinedRequestPost',
	alias: 'RPDeleteProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
