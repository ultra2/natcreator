Ext.define('designer.model.PMAccount', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'PMAccount'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'passwordSalt', type: 'presence' }
 	 	 ,{ field: 'passwordHash', type: 'presence' }
 	 	 ,{ field: 'email', type: 'presence' }
 	 	 ,{ field: 'githubToken', type: 'presence' }
 	 	 ,{ field: 'resetPasswordKey', type: 'presence' }
 	 	 ,{ field: 'isLocal', type: 'presence' }
 	 	 ,{ field: 'googleId', type: 'presence' }
 	 	 ,{ field: 'lastLoginDate', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 