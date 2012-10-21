Ext.define('designer.model.QueryResult', { 
	extend: 'designer.model.CRBaseObject',
	alias: 'QueryResult'
	
	,fields: [
		{ name: 'created', type: 'date', defaultValue: new Date(0), debug: true }
		,{ name: 'modified', type: 'date', defaultValue: new Date(0), debug: true }
		,{ name: 'deleted', type: 'boolean', debug: true }
		,{ name: 'version', type: 'int', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'created', type: 'presence' }
		,{ field: 'modified', type: 'presence' }
		,{ field: 'deleted', type: 'presence' }
		,{ field: 'version', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.QueryResult'));
