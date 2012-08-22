Ext.define('undefinedRPExportFiles', { 
	extend: 'undefinedRequestPost',
	alias: 'RPExportFiles'
	
	,fields: [
		{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'undefinedROFile' , primaryKey: '_id' }
	]
	,validations: [
		{ field: 'path', type: 'presence' }
		,{ field: 'deleteDirectory', type: 'presence' }
		,{ field: 'files', type: 'presence' }
	]
	,fieldInfos: [
	]
});
