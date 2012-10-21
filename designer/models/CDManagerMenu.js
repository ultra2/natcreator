Ext.define('designer.model.CDManagerMenu', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDManagerMenu'
	
	,fields: [
		{ name: 'parentId', type: 'string', debug: true }
		,{ name: 'depth', type: 'int', debug: true }
		,{ name: 'leaf', type: 'boolean', debug: true }
		,{ name: 'index', type: 'int', debug: true }
		,{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'parentId', type: 'presence' }
		,{ field: 'depth', type: 'presence' }
		,{ field: 'leaf', type: 'presence' }
		,{ field: 'index', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDManagerMenu'));
