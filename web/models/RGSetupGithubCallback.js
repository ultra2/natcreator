Ext.define('web.model.RGSetupGithubCallback', { 
 	 extend: 'web.model.RequestGet',
 	 alias: 'RGSetupGithubCallback'
 	 
 	 ,fields: [
 	 	 { name: 'code', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'code', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 