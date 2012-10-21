Ext.define('designer.model.CDClass', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'mixins', type: 'auto', debug: true }
		,{ name: 'displayName', type: 'string', debug: true }
		,{ name: 'iconIndex', type: 'int', debug: true }
		,{ name: 'droppables', type: 'auto', debug: true }
		,{ name: 'droppableIntos', type: 'auto', debug: true }
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
