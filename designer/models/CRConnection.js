Ext.define('designer.model.CRConnection', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'CRConnection'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'database', type: 'string' }
 	 	 ,{ name: 'server', type: 'string' }
 	 	 ,{ name: 'port', type: 'string' }
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
 