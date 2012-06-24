Ext.define('web.model.PMProject', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'web.model.PMConnection' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'connections', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 