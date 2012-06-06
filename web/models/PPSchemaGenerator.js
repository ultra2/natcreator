Ext.define('web.model.PPSchemaGenerator', { 
 	 extend: 'web.model.PPGenerator',
 	 alias: 'PPSchemaGenerator'
 	 
 	 ,fields: [
 	 	 { name: 'source', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'source', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 