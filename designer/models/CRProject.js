Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.persistentM',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 	 ,validations: [
 	 	 { field: 'connection', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 