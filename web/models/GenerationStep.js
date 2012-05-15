Ext.define('web.model.GenerationStep', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'GenerationStep'
 	 
 	 ,fields: [
 	 	 { name: 'generator_id', type: 'string' }
 	 	 ,{ name: 'path', type: 'string' }
 	 	 ,{ name: 'projectSetting_id', type: 'string' }
 	 	 ,{ name: 'deleteDirectory', type: 'boolean' }
 	 	 ,{ name: 'active', type: 'boolean' }
 	 	 ,{ name: 'params', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'generator_id', type: 'presence' }
 	 	 ,{ field: 'path', type: 'presence' }
 	 	 ,{ field: 'projectSetting_id', type: 'presence' }
 	 	 ,{ field: 'deleteDirectory', type: 'presence' }
 	 	 ,{ field: 'active', type: 'presence' }
 	 	 ,{ field: 'params', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 