Ext.define('designer.model.Login', { 
 	 extend: 'designer.model.Communication',
 	 alias: 'Login'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 