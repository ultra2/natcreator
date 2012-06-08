Ext.define('web.model.PPSchemaListGenerator', { 
 	 extend: 'web.model.PPGenerator',
 	 alias: 'PPSchemaListGenerator'
 	 
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
 