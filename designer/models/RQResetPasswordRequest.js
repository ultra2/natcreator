Ext.define('designer.model.RQResetPasswordRequest', { 
 	 extend: 'designer.model.Request',
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
 