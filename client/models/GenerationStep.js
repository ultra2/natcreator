Ext.define('designer.model.GenerationStep', { 
 	 extend: 'designer.model.CRBaseObject'
 	 
 	 ,fields: [
 	 	 ,{ name: 'generator_id', type: 'string' }
 	 	 ,{ name: 'path', type: 'string' }
 	 	 ,{ name: 'projectSetting_id', type: 'string' }
 	 	 ,{ name: 'deleteDirectory', type: 'boolean' }
 	 	 ,{ name: 'active', type: 'boolean' }
 	 ]
 });
 