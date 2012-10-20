Ext.define('designer.model.CDClass', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'mixins', type: 'auto' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'droppables', type: 'auto' }
		,{ name: 'droppableIntos', type: 'auto' }
	]
	,associations: [
		{ type: 'hasMany', name: 'configs', associationKey: 'configs', model: 'designer.model.CDClassConfig' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'configs', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDClass'));
