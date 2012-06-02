Ext.define('web.model.RQLogin', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RQLogin'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'rememberMe', type: 'boolean' }
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
 