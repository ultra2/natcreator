Ext.define('natcreator.model.RPCreateProject', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'guide', type: 'string' }
		,{ name: 'connectionUrl', type: 'string' }
		,{ name: 'packages', type: 'auto' }
		,{ name: 'type', type: 'string' }
		,{ name: 'accessibility', type: 'string' }
		,{ name: 'releaseUrl', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
