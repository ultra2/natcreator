Ext.define('undefinedRPCreateGenerator', { 
	extend: 'undefinedRequestPost',
	alias: 'RPCreateGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'format', matcher: /^([\w\-\.])+$/ }
	]
	,fieldInfos: [
	]
});
