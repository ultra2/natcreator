Ext.define('designer.model.RGResetPassword', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGResetPassword'
	
	,fields: [
		{ name: 'key', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGResetPassword'));
