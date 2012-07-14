Ext.define('web.model.PMAccountProjectRole', { 
	alias: 'PMAccountProjectRole'
	extend: 'web.model.PersistentMaster',
	
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
