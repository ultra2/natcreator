Ext.define('designer.model.CDViewNode', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'type', type: 'string', debug: true }
		,{ name: 'reference', type: 'auto', debug: true }
		,{ name: 'codeClass', type: 'auto', debug: true }
		,{ name: 'userConfig', type: 'auto', debug: true }
		,{ name: 'customConfigs', type: 'auto', debug: true }
		,{ name: 'expanded', type: 'boolean', debug: true }
		,{ name: 'masterInstanceId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDViewNode'));
