Ext.define('designer.model.PPMetaProperty', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPMetaProperty'
	
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
