Ext.define('designer.model.RPResetPassword', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'pinCode', type: 'string' }
		,{ name: 'username', type: 'string' }
		,{ name: 'newPassword', type: 'string' }
		,{ name: 'confirmNewPassword', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'pinCode', type: 'presence' }
		,{ field: 'pinCode', type: 'length', min: 6, max: 6 }
		,{ field: 'username', type: 'presence' }
		,{ field: 'username', type: 'length', min: 6, max: 20 }
		,{ field: 'newPassword', type: 'presence' }
		,{ field: 'newPassword', type: 'length', min: 6, max: 20 }
		,{ field: 'confirmNewPassword', type: 'presence' }
	]
});
