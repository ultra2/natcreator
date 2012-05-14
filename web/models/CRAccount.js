Ext.define('web.model.CRAccount', { 
 	 extend: 'web.model.persistentM',
 	 alias: 'CRAccount'
 	 
 	 ,fields: [
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
 