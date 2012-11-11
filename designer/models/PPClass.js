Ext.define('designer.model.PPClass', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPClass'
	
	,fields: [
		{ name: 'parentId', type: 'string', debug: true }
		,{ name: 'leaf', type: 'boolean', debug: true }
		,{ name: 'depth', type: 'int', debug: true }
		,{ name: 'index', type: 'int', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'alias', type: 'string', debug: true }
		,{ name: 'displayName', type: 'string', debug: true }
		,{ name: 'configs', type: 'auto', debug: true }
		,{ name: 'mixins', type: 'auto', debug: true }
		,{ name: 'iconIndex', type: 'int', debug: true }
		,{ name: 'droppables', type: 'auto', debug: true }
		,{ name: 'droppableIntos', type: 'auto', debug: true }
		,{ name: 'userConfig', type: 'auto', debug: true }
		,{ name: 'meta', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPClass'));
