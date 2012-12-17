Ext.define('web.model.CDClassMetaNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClassMetaNode'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'reference', type: 'auto' }
		,{ name: 'codeClass', type: 'auto' }
		,{ name: 'userConfig', type: 'auto' }
		,{ name: 'customConfigs', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDClassMetaNode'));
