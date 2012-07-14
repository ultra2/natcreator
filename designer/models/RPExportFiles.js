Ext.define('designer.model.RPExportFiles', { 
	alias: 'RPExportFiles'
	extend: 'designer.model.RequestPost',
	
	,fields: [
		{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'designer.model.ROFile' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'path', type: 'presence' }
		,{ field: 'deleteDirectory', type: 'presence' }
		,{ field: 'files', type: 'presence' }
	]
	,fieldInfos: [
	]
});
