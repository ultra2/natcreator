Ext.define('designer.model.RQAccountInfo', { 
 	 extend: 'designer.model.Request',
 	 alias: 'RQAccountInfo'
 	 
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
 