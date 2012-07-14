Ext.define('web.model.PPGenerator', { 
	alias: 'PPGenerator'
	extend: 'web.model.PersistentProject',
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'source', type: 'presence' }
	]
	,fieldInfos: [
	]
});
