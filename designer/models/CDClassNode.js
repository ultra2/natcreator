Ext.define('designer.model.CDClassNode', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClassNode'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'reference', type: 'auto' }
		,{ name: 'codeClass', type: 'auto' }
		,{ name: 'userConfig', type: 'auto' }
		,{ name: 'customConfigs', type: 'auto' }
		,{ name: 'expanded', type: 'boolean' }
		,{ name: 'masterInstanceId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDClassNode'));
