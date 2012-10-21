Ext.define('designer.model.PMProject', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMProject'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'description', type: 'string', debug: true }
		,{ name: 'isTemplate', type: 'boolean', debug: true }
		,{ name: 'template_id', type: 'string', debug: true }
		,{ name: 'guide', type: 'string', debug: true }
		,{ name: 'connectionUrl', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'length', min: 6, max: 30 }
		,{ field: 'description', type: 'presence' }
		,{ field: 'description', type: 'length', min: 0, max: 500 }
		,{ field: 'template_id', type: 'presence' }
		,{ field: 'connectionUrl', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMProject'));
