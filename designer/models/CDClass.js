Ext.define('undefinedCDClass', { 
	extend: 'undefinedClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'mixins', type: 'auto' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'droppables', type: 'auto' }
		,{ name: 'droppableIntos', type: 'auto' }
	]
	,associations: [
		{ type: 'hasMany', name: 'configs', associationKey: 'configs', model: 'undefinedCDClassConfig' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'configs', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('undefinedCDClass'));
