Ext.define('web.model.CRProject', { 
 	 extend: 'web.model.persistentM',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'web.model.CRConnection' }
 	 ]
 	 ,fieldInfos: [
 	 	 { field: 'connection', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 