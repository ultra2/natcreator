Ext.define('designer.model.PPDataProperty', { 
	alias: 'PPDataProperty'
	extend: 'designer.model.PersistentProject',
	
	,fields: [
		{ name: 'index', type: 'int' }
		,{ name: 'isKey', type: 'boolean' }
		,{ name: 'isDebug', type: 'boolean' }
		,{ name: 'isNullable', type: 'boolean' }
		,{ name: 'isArray', type: 'boolean' }
		,{ name: 'name', type: 'string' }
		,{ name: 'isPersistent', type: 'boolean', defaultValue: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
