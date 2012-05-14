Ext.define('designer.model.GenerationStep', { 
 	 extend: 'designer.model.persistentC',
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
 	 ,fieldInfos: [
 	 	 { name: 'generator' }
 	 	 ,{ name: 'path' }
 	 	 ,{ name: 'projectSetting' }
 	 	 ,{ name: 'deleteDirectory' }
 	 	 ,{ name: 'active' }
 	 	 ,{ name: 'params' }
 	 ]
 });
 