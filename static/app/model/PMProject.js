Ext.define('natcreator.model.PMProject', { 
	extend: 'natcreator.model.PersistentMaster'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
		,{ name: 'guide', type: 'string' }
		,{ name: 'connectionUrl', type: 'string' }
		,{ name: 'packages', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'length', min: 6, max: 30 }
		,{ field: 'description', type: 'presence' }
		,{ field: 'description', type: 'length', min: 0, max: 500 }
		,{ field: 'connectionUrl', type: 'presence' }
	]
});
