Ext.define('designer.model.RGResetPassword', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGResetPassword'
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGResetPassword'));
