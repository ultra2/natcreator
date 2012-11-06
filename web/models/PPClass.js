Ext.define('web.model.PPClass', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPClass'
	
	,fields: [
		{ name: 'superClass', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'alias', type: 'string', debug: true }
		,{ name: 'displayName', type: 'string', debug: true }
		,{ name: 'configs', type: 'auto', debug: true }
		,{ name: 'meta', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'superClass', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
