Ext.define('web.model.PPGenerator', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', defaultValue: 'function Generator(params) \n{ \nthis.params = params; \n} ', debug: true }
		,{ name: 'origin_id', type: 'string' }
		,{ name: 'originRepo', type: 'string' }
		,{ name: 'originPath', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'source', type: 'presence' }
		,{ field: 'origin_id', type: 'presence' }
		,{ field: 'originRepo', type: 'presence' }
		,{ field: 'originPath', type: 'presence' }
	]
	,fieldInfos: [
	]
});
