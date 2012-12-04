Ext.define('web.model.CDPropertyNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDPropertyNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'value', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'accepted', type: 'auto', debug: true }
		,{ name: 'readOnly', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDPropertyNode'));
