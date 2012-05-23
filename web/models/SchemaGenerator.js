Ext.define('web.model.SchemaGenerator', { 
 	 extend: 'web.model.Generator',
 	 alias: 'SchemaGenerator'
 	 
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
 