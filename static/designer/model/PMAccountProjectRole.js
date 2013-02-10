Ext.define('designer.model.PMAccountProjectRole', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMAccountProjectRole'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
