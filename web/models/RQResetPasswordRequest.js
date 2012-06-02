Ext.define('web.model.RQResetPasswordRequest', { 
 	 extend: 'web.model.Request',
 	 alias: 'RQResetPasswordRequest'
 	 
 	 ,fields: [
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
 