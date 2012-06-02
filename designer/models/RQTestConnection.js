Ext.define('designer.model.RQTestConnection', { 
 	 extend: 'designer.model.RequestPost',
 	 alias: 'RQTestConnection'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'server', type: 'string' }
 	 	 ,{ name: 'database', type: 'string' }
 	 	 ,{ name: 'port', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 	 ,{ field: 'server', type: 'presence' }
 	 	 ,{ field: 'database', type: 'presence' }
 	 	 ,{ field: 'port', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 