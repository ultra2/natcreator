Ext.define('undefinedRGResetPassword', { 
	extend: 'undefinedRequestGet',
	alias: 'RGResetPassword'
	
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
