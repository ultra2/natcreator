Ext.define('web.model.PMProject', { 
	extend: 'web.model.PersistentMaster',
	alias: 'PMProject'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'web.model.PMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'description', type: 'presence' }
		,{ field: 'isTemplate', type: 'presence' }
	]
	,fieldInfos: [
	]
});
