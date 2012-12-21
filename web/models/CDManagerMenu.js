Ext.define('web.model.CDManagerMenu', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDManagerMenu'
	
	,fields: [
		{ name: 'parentId', type: 'string' }
		,{ name: 'depth', type: 'int' }
		,{ name: 'leaf', type: 'boolean' }
		,{ name: 'index', type: 'int' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDManagerMenu'));
