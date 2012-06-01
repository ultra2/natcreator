Ext.define('web.model.ResetPassword', { 
 	 extend: 'web.model.Communication',
 	 alias: 'ResetPassword'
 	 
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
 