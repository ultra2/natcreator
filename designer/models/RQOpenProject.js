Ext.define('designer.model.RQOpenProject', { 
 	 extend: 'designer.model.RequestPost',
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
 