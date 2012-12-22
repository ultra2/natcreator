Ext.define('web.model.PPClass', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPClass'
	
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
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.PPClass'));