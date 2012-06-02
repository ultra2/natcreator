Ext.define('designer.model.PPGenerationStep', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPGenerationStep'
 	 
 	 ,fields: [
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
 