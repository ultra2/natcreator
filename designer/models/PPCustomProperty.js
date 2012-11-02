Ext.define('designer.model.PPCustomProperty', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPCustomProperty'
	
	,fields: [
		{ name: 'projectItem', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'defaultValue', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectItem', type: 'presence' }
		,{ field: 'type', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
