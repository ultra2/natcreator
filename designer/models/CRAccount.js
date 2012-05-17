Ext.define('designer.model.CRAccount', { 
 	 extend: 'designer.model.PersistentM',
 	 alias: 'CRAccount'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'passwordSalt', type: 'string' }
 	 	 ,{ name: 'passwordHash', type: 'string' }
 	 	 ,{ name: 'email', type: 'string' }
 	 	 ,{ name: 'isActivated', type: 'boolean' }
 	 	 ,{ name: 'githubToken', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'passwordSalt', type: 'presence' }
 	 	 ,{ field: 'passwordHash', type: 'presence' }
 	 	 ,{ field: 'email', type: 'presence' }
 	 	 ,{ field: 'isActivated', type: 'presence' }
 	 	 ,{ field: 'githubToken', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 