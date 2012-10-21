Ext.define('designer.model.RPRenameGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPRenameGenerator'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'generatorId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'format', matcher: /^([\w\-\.])+$/ }
		,{ field: 'generatorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPRenameGenerator'));
