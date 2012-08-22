Ext.define('undefinedRGActivate', { 
	extend: 'undefinedRequestGet',
	alias: 'RGActivate'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
	,fieldInfos: [
	]
});
