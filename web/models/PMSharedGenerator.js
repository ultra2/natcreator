Ext.define('web.model.PMSharedGenerator', { 
	extend: 'web.model.PersistentMaster',
	alias: 'PMSharedGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
