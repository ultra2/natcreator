Ext.define('natcreator.model.PMAccountProjectRole', { 
	extend: 'natcreator.model.PersistentMaster'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
