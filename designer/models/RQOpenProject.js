Ext.define('designer.model.RQOpenProject', { 
 	 extend: 'designer.model.Request',
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
 