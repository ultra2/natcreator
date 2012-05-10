Ext.define('designer.model.ProjectSetting', { 
 	 extend: 'designer.model.persistentC',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.GenerationStep' , primaryKey: '_id' }
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'repositoryName' }
 	 	 ,{ name: 'repositoryHost' }
 	 	 ,{ name: 'fontSize' }
 	 	 ,{ name: 'generationSteps' }
 	 ]
 });
 