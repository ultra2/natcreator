Ext.define('web.model.RGActivate', { 
	alias: 'RGActivate'
	extend: 'web.model.RequestGet',
	
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
