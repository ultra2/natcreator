Ext.define('designer.model.QRSharedGeneratorList', { 
	extend: 'designer.model.QueryResult',
	alias: 'QRSharedGeneratorList'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'generatorVersion', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'generatorVersion', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.QRSharedGeneratorList'));
