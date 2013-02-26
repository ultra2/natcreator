Ext.define('designer.model.CDInspectorNode', { 
	extend: 'designer.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'referenceType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDInspectorNode'));
