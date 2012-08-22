Ext.define('undefinedPPProjectConfig', { 
	extend: 'undefinedPersistentProject',
	alias: 'PPProjectConfig'
	
	,fields: [
	]
	,associations: [
		{ type: 'hasMany', name: 'customProperties', associationKey: 'customProperties', model: 'undefinedPPCustomProperty' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'customProperties', type: 'presence' }
	]
	,fieldInfos: [
	]
});
