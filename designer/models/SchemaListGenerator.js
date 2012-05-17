Ext.define('designer.model.SchemaListGenerator', { 
 	 extend: 'designer.model.Generator',
 	 alias: 'SchemaListGenerator'
 	 
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
 