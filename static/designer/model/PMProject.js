Ext.define('designer.model.PMProject', { 
	extend: 'designer.model.PersistentMaster'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
		,{ name: 'template_id', type: 'string' }
		,{ name: 'guide', type: 'string' }
		,{ name: 'connectionUrl', type: 'string' }
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
});
