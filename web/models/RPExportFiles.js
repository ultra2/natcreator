Ext.define('web.model.RPExportFiles', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPExportFiles'
 	 
 	 ,fields: [
 	 	 { name: 'path', type: 'string' }
 	 	 ,{ name: 'deleteDirectory', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'files', associationKey: 'files', model: 'web.model.ROFile' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'path', type: 'presence' }
 	 	 ,{ field: 'deleteDirectory', type: 'presence' }
 	 	 ,{ field: 'files', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 