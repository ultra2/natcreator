Ext.define('designer.model.CRAccount', { 
 	 extend: 'designer.model.persistentM',
 	 alias: 'CRAccount'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'passwordSalt', type: 'string' }
 	 	 ,{ name: 'passwordHash', type: 'string' }
 	 	 ,{ name: 'email', type: 'string' }
 	 	 ,{ name: 'isActivated', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'username' }
 	 	 ,{ name: 'passwordSalt' }
 	 	 ,{ name: 'passwordHash' }
 	 	 ,{ name: 'email' }
 	 	 ,{ name: 'isActivated' }
 	 ]
 });
 