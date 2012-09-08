Ext.define('web.model.PMProject', { 
	extend: 'web.model.PersistentMaster',
	alias: 'PMProject'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
		,{ name: 'template_id', type: 'string' }
		,{ name: 'guide', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'web.model.PMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'length', min: 6, max: 30 }
		,{ field: 'description', type: 'presence' }
		,{ field: 'description', type: 'length', min: 0, max: 500 }
		,{ field: 'template_id', type: 'presence' }
	]
	,fieldInfos: [
	]
});
