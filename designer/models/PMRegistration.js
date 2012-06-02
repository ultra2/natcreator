Ext.define('designer.model.PMRegistration', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'PMRegistration'
 	 
 	 ,fields: [
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
 