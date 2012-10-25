Ext.define('undefinedRPIsProjectNameAvailable', { 
	extend: 'undefinedRequestPost',
	alias: 'RPIsProjectNameAvailable'
	
	,fields: [
		{ name: 'projectName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
