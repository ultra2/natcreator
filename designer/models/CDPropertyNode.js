Ext.define('designer.model.CDPropertyNode', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDPropertyNode'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'type', type: 'string', debug: true }
		,{ name: 'value', type: 'auto', debug: true }
		,{ name: 'values', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDPropertyNode'));
