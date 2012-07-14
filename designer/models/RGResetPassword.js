Ext.define('designer.model.RGResetPassword', { 
	alias: 'RGResetPassword'
	extend: 'designer.model.RequestGet',
	
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
