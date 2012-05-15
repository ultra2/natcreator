Ext.define('designer.model.AccountInfo', { 
 	 extend: 'designer.model.communication',
 	 alias: 'AccountInfo'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'hasGithubToken', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'hasGithubToken', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 