Ext.define('web.model.PMProject', { 
	alias: 'PMProject'
	extend: 'web.model.PersistentMaster',
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'web.model.PMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
