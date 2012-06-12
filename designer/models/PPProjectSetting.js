Ext.define('designer.model.PPProjectSetting', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 	 ,{ name: 'githubUserName', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.PPGenerationStep' , primaryKey: '_id' }
 	 	 ,{ type: 'belongsTo', name: 'customProperties', model: 'designer.model.PPMetaProperty' }
 	 ]
 	 ,validations: [
 	 	 { field: 'repositoryName', type: 'presence' }
 	 	 ,{ field: 'repositoryHost', type: 'presence' }
 	 	 ,{ field: 'fontSize', type: 'presence' }
 	 	 ,{ field: 'generationSteps', type: 'presence' }
 	 	 ,{ field: 'githubUserName', type: 'presence' }
 	 	 ,{ field: 'customProperties', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 