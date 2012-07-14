Ext.define('web.model.PPProjectConfig', { 
	alias: 'PPProjectConfig'
	extend: 'web.model.PersistentProject',
	
	,fields: [
	]
	,associations: [
		{ type: 'hasMany', name: 'customProperties', associationKey: 'customProperties', model: 'web.model.PPMetaProperty' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'customProperties', type: 'presence' }
	]
	,fieldInfos: [
	]
});
