Ext.define('web.model.RPRegistration', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPRegistration'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'email', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'confirmPassword', type: 'string', persist: false }
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
 