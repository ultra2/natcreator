Ext.define('designer.model.PPSchemaListGenerator', { 
 	 extend: 'designer.model.PPGenerator',
 	 alias: 'PPSchemaListGenerator'
 	 
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
 