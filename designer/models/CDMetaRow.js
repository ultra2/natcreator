Ext.define('designer.model.CDMetaRow', { 
	alias: 'CDMetaRow'
	extend: 'designer.model.ClientDesigner',
	
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
		{ field: 'parentId', type: 'presence' }
		,{ field: 'depth', type: 'presence' }
		,{ field: 'leaf', type: 'presence' }
		,{ field: 'index', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDMetaRow'));
