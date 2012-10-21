Ext.define('designer.model.RPResetPassword', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPResetPassword'
	
	,fields: [
		{ name: 'pinCode', type: 'string', debug: true }
		,{ name: 'username', type: 'string', debug: true }
		,{ name: 'newPassword', type: 'string', debug: true }
		,{ name: 'confirmNewPassword', type: 'string', persist: false, debug: true }
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
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPResetPassword'));
