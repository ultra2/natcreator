Ext.define('web.model.RPLogin', { 
	alias: 'RPLogin'
	extend: 'web.model.RequestPost',
	
	,fields: [
		{ name: 'username', type: 'string' }
		,{ name: 'password', type: 'string' }
		,{ name: 'rememberMe', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
		,{ field: 'password', type: 'presence' }
	]
	,fieldInfos: [
	]
});
