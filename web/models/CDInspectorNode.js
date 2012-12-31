Ext.define('web.model.CDInspectorNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDInspectorNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'referenceType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDInspectorNode'));
