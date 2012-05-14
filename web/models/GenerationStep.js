Ext.define('web.model.GenerationStep', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'GenerationStep'
 	 
 	 ,fields: [
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
 