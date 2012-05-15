Ext.define('web.model.Generator', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'Generator'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 