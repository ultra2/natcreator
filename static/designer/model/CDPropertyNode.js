Ext.define('designer.model.CDPropertyNode', { 
	extend: 'designer.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'value', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'params', type: 'auto' }
		,{ name: 'readOnly', type: 'boolean' }
		,{ name: 'defined', type: 'boolean' }
		,{ name: 'reftoGetValue', type: 'auto' }
		,{ name: 'reftoGetValues', type: 'auto' }
		,{ name: 'lookupValue', type: 'auto' }
		,{ name: 'refType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDPropertyNode'));
