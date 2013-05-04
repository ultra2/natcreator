Ext.define('natcreator.model.CDInspectorNode', { 
	extend: 'natcreator.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'referenceType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('natcreator.model.CDInspectorNode'));
