Ext.define('undefinedRPOpenProject', { 
	extend: 'undefinedRequestPost',
	alias: 'RPOpenProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
		,{ name: 'mode', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
		,{ field: 'mode', type: 'presence' }
	]
	,fieldInfos: [
	]
});
