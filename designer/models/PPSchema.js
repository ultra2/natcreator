Ext.define('designer.model.PPSchema', { 
	alias: 'PPSchema'
	extend: 'designer.model.PersistentProject',
	
	,fields: [
		{ name: 'isHierarchy', type: 'boolean' }
		,{ name: 'parentId', type: 'string', debug: true }
		,{ name: 'leaf', type: 'boolean', debug: true }
		,{ name: 'depth', type: 'int', debug: true }
		,{ name: 'index', type: 'int', debug: true }
		,{ name: 'name', type: 'string' }
		,{ name: 'strParam1', type: 'string' }
		,{ name: 'isCollection', type: 'boolean' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'frameworkName', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'designer.model.PPDataProperty' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'isCollection', type: 'presence' }
		,{ field: 'displayName', type: 'presence' }
		,{ field: 'frameworkName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPSchema'));
