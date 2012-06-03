Ext.define('designer.model.RPResetPassword', { 
 	 extend: 'designer.model.RequestPost',
 	 alias: 'RPResetPassword'
 	 
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
 