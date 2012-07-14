Ext.define('web.model.PPDataProperty', { 
	alias: 'PPDataProperty'
	extend: 'web.model.PersistentProject',
	
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
