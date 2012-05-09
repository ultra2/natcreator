Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.persistentM',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'connection }
 	 	 ,{ name: 'name }
 	 ]
 });
 