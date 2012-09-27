Ext.define('web.model.PPView', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'json', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'json', type: 'presence' }
	]
	,fieldInfos: [
	]
});
