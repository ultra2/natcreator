Ext.define('designer.model.RPExportFiles', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPExportFiles'
	
	,fields: [
		{ name: 'path', type: 'string', debug: true }
		,{ name: 'deleteDirectory', type: 'boolean', debug: true }
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPExportFiles'));
