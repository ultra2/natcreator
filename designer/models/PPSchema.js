Ext.define('undefinedPPSchema', { 
	extend: 'undefinedPPProjectItem',
	alias: 'PPSchema'
	
	,fields: [
		{ name: 'parentId', type: 'string', debug: true }
		,{ name: 'leaf', type: 'boolean', debug: true }
		,{ name: 'depth', type: 'int', debug: true }
		,{ name: 'index', type: 'int', debug: true }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'undefinedPPDataProperty' , primaryKey: '_id' }
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('undefinedPPSchema'));
