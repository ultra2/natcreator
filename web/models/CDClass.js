Ext.define('web.model.CDClass', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'mixins', type: 'auto' }
		,{ name: 'configs', type: 'auto' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'droppables', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDClass'));
