Ext.define('designer.model.ROGithubInfo', { 
 	 extend: 'designer.model.RequestObject',
 	 alias: 'ROGithubInfo'
 	 
 	 ,fields: [
 	 	 { name: 'isAuthorized', type: 'boolean' }
 	 	 ,{ name: 'username', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'isAuthorized', type: 'presence' }
 	 	 ,{ field: 'username', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 