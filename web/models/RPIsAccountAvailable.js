Ext.define('web.model.RPIsAccountAvailable', { 
	alias: 'RPIsAccountAvailable'
	extend: 'web.model.RequestPost',
	
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
