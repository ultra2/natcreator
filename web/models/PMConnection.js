Ext.define('web.model.PMConnection', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMConnection'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 	 ,{ field: 'database', type: 'presence' }
 	 	 ,{ field: 'server', type: 'presence' }
 	 	 ,{ field: 'port', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 