Ext.define('designer.model.CDFile', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDFile'
	
	,fields: [
		{ name: 'parentId', type: 'string', debug: true }
		,{ name: 'leaf', type: 'boolean', debug: true }
		,{ name: 'depth', type: 'int', debug: true }
		,{ name: 'index', type: 'int', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'content', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDFile'));
