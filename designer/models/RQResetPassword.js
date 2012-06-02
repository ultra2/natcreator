Ext.define('designer.model.RQResetPassword', { 
 	 extend: 'designer.model.RequestPost',
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
 