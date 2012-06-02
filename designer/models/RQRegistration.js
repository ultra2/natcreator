Ext.define('designer.model.RQRegistration', { 
 	 extend: 'designer.model.Request',
 	 alias: 'RQRegistration'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'username', type: 'length', min: 6, max: 20 }
 	 	 ,{ field: 'email', type: 'presence' }
 	 	 ,{ field: 'email', type: 'email' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 	 ,{ field: 'password', type: 'length', min: 6, max: 20 }
 	 	 ,{ field: 'confirmPassword', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 