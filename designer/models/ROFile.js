Ext.define('undefinedROFile', { 
	extend: 'undefinedRequestObject',
	alias: 'ROFile'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
	,fieldInfos: [
	]
});
