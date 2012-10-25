Ext.define('undefinedRPOpenProject', { 
	extend: 'undefinedRequestPost',
	alias: 'RPOpenProject'
	
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
