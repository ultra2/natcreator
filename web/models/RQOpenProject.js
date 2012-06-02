Ext.define('web.model.RQOpenProject', { 
 	 extend: 'web.model.Request',
 	 alias: 'RQOpenProject'
 	 
 	 ,fields: [
 	 	 { name: 'projectId', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'projectId', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 