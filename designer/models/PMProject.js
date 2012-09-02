Ext.define('designer.model.PMProject', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMProject'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'isTemplate', type: 'boolean' }
		,{ name: 'template_id', type: 'string' }
	]
	,associations: [
		{ type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'designer.model.PMConnection' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'connections', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'length', min: 6, max: 20 }
		,{ field: 'description', type: 'presence' }
		,{ field: 'template_id', type: 'presence' }
	]
	,fieldInfos: [
	]
});
