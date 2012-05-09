Ext.define('designer.model.CRConnection', { 
 	 extend: 'designer.model.persistentM',
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
 	 ,fieldInfos: [
 	 	 { name: 'username' }
 	 	 ,{ name: 'password' }
 	 	 ,{ name: 'database' }
 	 	 ,{ name: 'server' }
 	 	 ,{ name: 'port' }
 	 ]
 });
 