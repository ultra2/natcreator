Ext.define('designer.model.PersistentProject', { 
	extend: 'designer.model.CRBaseObject',
	alias: 'PersistentProject'
	
	,fields: [
		{ name: 'created', type: 'date', debug: true }
		,{ name: 'modified', type: 'date', debug: true }
		,{ name: 'version', type: 'int', debug: true }
		,{ name: 'deleted', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PersistentProject'));
