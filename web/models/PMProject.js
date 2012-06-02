Ext.define('web.model.PMProject', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'connections', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 