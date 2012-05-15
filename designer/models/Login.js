Ext.define('designer.model.Login', { 
 	 extend: 'designer.model.communication',
 	 alias: 'Login'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'username' }
 	 	 ,{ name: 'password' }
 	 ]
 });
 