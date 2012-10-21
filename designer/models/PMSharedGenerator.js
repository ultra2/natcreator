Ext.define('designer.model.PMSharedGenerator', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMSharedGenerator'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'originProject_id', type: 'string', debug: true }
		,{ name: 'originGenerator_id', type: 'string', debug: true }
		,{ name: 'generatorVersion', type: 'string', defaultValue: '1.0', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'originProject_id', type: 'presence' }
		,{ field: 'originGenerator_id', type: 'presence' }
		,{ field: 'generatorVersion', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMSharedGenerator'));
