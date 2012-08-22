Ext.define('undefinedPMAccountProjectRole', { 
	extend: 'undefinedPersistentMaster',
	alias: 'PMAccountProjectRole'
	
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
