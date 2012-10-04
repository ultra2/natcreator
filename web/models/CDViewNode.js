Ext.define('web.model.CDViewNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'userConfig', type: 'auto' }
		,{ name: 'masterInstanceId_id', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDViewNode'));
