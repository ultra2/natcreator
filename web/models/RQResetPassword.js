Ext.define('web.model.RQResetPassword', { 
 	 extend: 'web.model.Request',
 	 alias: 'RQResetPassword'
 	 
 	 ,fields: [
 	 	 { name: 'password', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'password', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 