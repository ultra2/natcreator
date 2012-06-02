Ext.define('web.model.PMRegistration', { 
 	 extend: 'web.model.PersistentMaster',
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
 