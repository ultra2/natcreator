Ext.define('designer.model.RPChangePassword', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPChangePassword'
	
	,fields: [
		{ name: 'currentPassword', type: 'string', debug: true }
		,{ name: 'newPassword', type: 'string', debug: true }
		,{ name: 'confirmNewPassword', type: 'string', persist: false, debug: true }
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
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPChangePassword'));
