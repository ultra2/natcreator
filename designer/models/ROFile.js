Ext.define('designer.model.ROFile', { 
	extend: 'designer.model.RequestObject',
	alias: 'ROFile'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'content', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.ROFile'));
