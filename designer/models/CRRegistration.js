Ext.define('designer.model.CRRegistration', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'CRRegistration'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'passwordSalt', type: 'string' }
 	 	 ,{ name: 'passwordHash', type: 'string' }
 	 	 ,{ name: 'email', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'passwordSalt', type: 'presence' }
 	 	 ,{ field: 'passwordHash', type: 'presence' }
 	 	 ,{ field: 'email', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 