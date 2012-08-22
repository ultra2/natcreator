Ext.define('undefinedPMProject', { 
	extend: 'undefinedPersistentMaster',
	alias: 'PMProject'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'undefinedPMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
