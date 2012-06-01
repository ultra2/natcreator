Ext.define('designer.model.ResetPasswordRequest', { 
 	 extend: 'designer.model.Communication',
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
 