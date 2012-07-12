Ext.define('designer.model.PPGenerator', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPGenerator'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 	 ,{ name: 'source', type: 'string', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 	 ,{ field: 'source', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 