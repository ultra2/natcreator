Ext.define('web.model.CDInspectorNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDInspectorNode'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'referenceType', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDInspectorNode'));
