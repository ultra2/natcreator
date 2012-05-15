Ext.define('web.model.Login', { 
 	 extend: 'web.model.communication',
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
 