Ext.define('web.model.CRProject', { 
 	 extend: 'web.model.PersistentM',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'web.model.CRConnection' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'connections', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 