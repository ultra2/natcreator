Ext.define('web.model.CDPropertyNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDPropertyNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'value', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'readOnly', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDPropertyNode'));