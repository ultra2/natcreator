Ext.define('web.model.ResetPasswordRequest', { 
 	 extend: 'web.model.Communication',
 	 alias: 'ResetPasswordRequest'
 	 
 	 ,fields: [
 	 	 { name: 'email', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'email', type: 'presence' }
 	 	 ,{ field: 'email', type: 'email' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 