Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.PersistentM',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'connections', associationKey: 'connections', model: 'designer.model.CRConnection' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'connections', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 