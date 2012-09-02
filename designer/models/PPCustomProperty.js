Ext.define('designer.model.PPCustomProperty', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPCustomProperty'
	
	,fields: [
		{ name: 'frameworkItem', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'defaultValue', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'frameworkItem', type: 'presence' }
		,{ field: 'type', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
