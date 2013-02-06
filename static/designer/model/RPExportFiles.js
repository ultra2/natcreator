Ext.define('designer.model.RPExportFiles', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPExportFiles'
	
	,fields: [
		{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'designer.model.ROFile', primaryKey: '_id' }
	]
	,validations: [
		{ field: 'path', type: 'presence' }
		,{ field: 'files_id', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPExportFiles'));
