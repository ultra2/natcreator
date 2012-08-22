Ext.define('undefinedRPIsAccountAvailable', { 
	extend: 'undefinedRequestPost',
	alias: 'RPIsAccountAvailable'
	
	,fields: [
		{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
	,fieldInfos: [
	]
});
