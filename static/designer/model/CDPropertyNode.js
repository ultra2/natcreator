Ext.define('designer.model.CDPropertyNode', { 
	extend: 'designer.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'value', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'params', type: 'auto' }
		,{ name: 'readOnly', type: 'boolean' }
		,{ name: 'defined', type: 'boolean' }
		,{ name: 'getValues', type: 'auto' }
		,{ name: 'refType', type: 'string' }
		,{ name: 'types', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDPropertyNode'));
