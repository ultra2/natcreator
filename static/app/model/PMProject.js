Ext.define('natcreator.model.PMProject', { 
	extend: 'natcreator.model.PersistentMaster'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'guide', type: 'string' }
		,{ name: 'connectionUrl', type: 'string' }
		,{ name: 'packages', type: 'auto' }
		,{ name: 'type', type: 'string' }
		,{ name: 'version', type: 'int' }
		,{ name: 'accessibility', type: 'string' }
		,{ name: 'releaseUrl', type: 'string' }
		,{ name: 'basePackage', type: 'boolean' }
		,{ name: 'firstStart', type: 'boolean' }
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
