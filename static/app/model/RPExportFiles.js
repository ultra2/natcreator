Ext.define('natcreator.model.RPExportFiles', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'natcreator.model.ROFile', primaryKey: '_id' }
	]
	,validations: [
		{ field: 'path', type: 'presence' }
		,{ field: 'files', type: 'presence' }
	]
});
