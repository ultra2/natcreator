Ext.define('web.model.CDClass', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'mixins', type: 'auto' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'dropables', type: 'auto' }
	]
	,associations: [
		{ type: 'hasMany', name: 'configs', associationKey: 'configs', model: 'web.model.CDClassConfig' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'configs', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDClass'));
