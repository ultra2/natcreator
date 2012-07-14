Ext.define('designer.model.PMAccountProjectRole', { 
	alias: 'PMAccountProjectRole'
	extend: 'designer.model.PersistentMaster',
	
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
