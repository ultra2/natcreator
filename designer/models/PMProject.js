Ext.define('designer.model.PMProject', { 
	alias: 'PMProject'
	extend: 'designer.model.PersistentMaster',
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'designer.model.PMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
