Ext.define('designer.model.RGActivate', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGActivate'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGActivate'));
