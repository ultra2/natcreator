Ext.define('web.model.ROAccountInfo', { 
 	 extend: 'web.model.RequestObject',
 	 alias: 'ROAccountInfo'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'hasGithubToken', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'hasGithubToken', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 