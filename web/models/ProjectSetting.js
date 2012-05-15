Ext.define('web.model.ProjectSetting', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'web.model.GenerationStep' , primaryKey: '_id' }
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'repositoryName' }
 	 	 ,{ name: 'repositoryHost' }
 	 	 ,{ name: 'fontSize' }
 	 	 ,{ name: 'generationSteps' }
 	 ]
 });
 