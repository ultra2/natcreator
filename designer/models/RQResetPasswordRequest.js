Ext.define('designer.model.RQResetPasswordRequest', { 
 	 extend: 'designer.model.Request',
 	 alias: 'RQResetPasswordRequest'
 	 
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
 