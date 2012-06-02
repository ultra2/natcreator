Ext.define('designer.model.RQTestConnection', { 
 	 extend: 'designer.model.Request',
 	 alias: 'RQTestConnection'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'server', type: 'string' }
 	 	 ,{ name: 'port', type: 'string' }
 	 	 ,{ name: 'database', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 	 ,{ field: 'server', type: 'presence' }
 	 	 ,{ field: 'port', type: 'presence' }
 	 	 ,{ field: 'database', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 