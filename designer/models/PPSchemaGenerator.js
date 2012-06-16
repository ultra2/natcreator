Ext.define('designer.model.PPSchemaGenerator', { 
 	 extend: 'designer.model.PPGenerator',
 	 alias: 'PPSchemaGenerator'
 	 
 	 ,fields: [
 	 	 { name: 'source', type: 'string', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'source', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 