Ext.define('natcreator.model.RPChangePassword', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'currentPassword', type: 'string' }
		,{ name: 'newPassword', type: 'string' }
		,{ name: 'confirmNewPassword', type: 'string', persist: false  }
	]
	,associations: [
	]
	,validations: [
		{ field: 'currentPassword', type: 'presence' }
		,{ field: 'currentPassword', type: 'length', min: 6, max: 20 }
		,{ field: 'newPassword', type: 'presence' }
		,{ field: 'newPassword', type: 'length', min: 6, max: 20 }
		,{ field: 'confirmNewPassword', type: 'presence' }
	]
});
