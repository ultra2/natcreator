Ext.define('web.model.PPProjectConfig', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
	]
	,associations: [
		{ type: 'hasMany', name: 'customProperties', associationKey: 'customProperties', model: 'web.model.PPCustomProperty' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'customProperties', type: 'presence' }
	]
	,fieldInfos: [
	]
});
