Ext.define('web.model.SchemaListGenerator', { 
 	 extend: 'web.model.Generator',
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
 