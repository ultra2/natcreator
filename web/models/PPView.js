Ext.define('web.model.PPView', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'config', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
