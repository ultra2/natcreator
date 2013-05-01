Ext.define('natcreator.model.PPFile', { 
	extend: 'natcreator.model.PersistentProject'
	
	,fields: [
		{ name: 'parentId', type: 'string' }
		,{ name: 'leaf', type: 'boolean' }
		,{ name: 'depth', type: 'int' }
		,{ name: 'index', type: 'int' }
		,{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'content', type: 'auto' }
		,{ name: 'url', type: 'string' }
		,{ name: 'readOnly', type: 'boolean' }
		,{ name: 'generatedBy', type: 'string' }
		,{ name: 'path', type: 'string', persist: false }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('natcreator.model.PPFile'));
