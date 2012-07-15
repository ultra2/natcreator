Ext.define('web.model.RPResetPassword', { 
	extend: 'web.model.RequestPost',
	alias: 'RPResetPassword'
	
	,fields: [
		{ name: 'password', type: 'string' }
		,{ name: 'confirmPassword', type: 'string', persist: false }
	]
	,associations: [
	]
	,validations: [
		{ field: 'password', type: 'presence' }
		,{ field: 'password', type: 'length', min: 6, max: 20 }
		,{ field: 'confirmPassword', type: 'presence' }
	]
	,fieldInfos: [
	]
});
