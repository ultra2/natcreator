Ext.define('web.model.AccountInfo', { 
 	 extend: 'web.model.communication',
 	 alias: 'AccountInfo'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'hasGithubToken', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'username' }
 	 	 ,{ name: 'hasGithubToken' }
 	 ]
 });
 