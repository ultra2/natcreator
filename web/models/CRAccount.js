Ext.define('web.model.CRAccount', { 
 	 extend: 'web.model.persistentM',
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
 	 ,fieldInfos: [
 	 	 { name: 'username' }
 	 	 ,{ name: 'passwordSalt' }
 	 	 ,{ name: 'passwordHash' }
 	 	 ,{ name: 'email' }
 	 	 ,{ name: 'isActivated' }
 	 	 ,{ name: 'githubToken' }
 	 ]
 });
 