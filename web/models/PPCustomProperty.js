Ext.define('web.model.PPCustomProperty', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPCustomProperty'
	
	,fields: [
		{ name: 'projectItem', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'defaultValue', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectItem', type: 'presence' }
		,{ field: 'type', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
