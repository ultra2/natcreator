Ext.define('web.model.CDViewNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'reference', type: 'auto' }
		,{ name: 'codeClass', type: 'auto' }
		,{ name: 'userConfig', type: 'auto' }
		,{ name: 'customConfigs', type: 'auto' }
		,{ name: 'expanded', type: 'boolean' }
		,{ name: 'masterInstanceId', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDViewNode'));
