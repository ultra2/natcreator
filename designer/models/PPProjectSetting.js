Ext.define('designer.model.PPProjectSetting', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.PPGenerationStep' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'repositoryName', type: 'presence' }
 	 	 ,{ field: 'repositoryHost', type: 'presence' }
 	 	 ,{ field: 'fontSize', type: 'presence' }
 	 	 ,{ field: 'generationSteps', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 