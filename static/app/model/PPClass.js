Ext.define('natcreator.model.PPClass', { 
	extend: 'natcreator.model.PersistentProject'
	
	,fields: [
		{ name: 'parentId', type: 'string' }
		,{ name: 'leaf', type: 'boolean' }
		,{ name: 'depth', type: 'int' }
		,{ name: 'index', type: 'int' }
		,{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'configs', type: 'auto' }
		,{ name: 'mixins', type: 'auto' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'meta', type: 'auto' }
		,{ name: 'user', type: 'boolean', persist: false }
		,{ name: 'userName', type: 'string', persist: false }
		,{ name: 'system', type: 'auto' }
		,{ name: 'metaSource', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('natcreator.model.PPClass'));
