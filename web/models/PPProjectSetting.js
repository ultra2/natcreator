Ext.define('web.model.PPProjectSetting', { 
 	 extend: 'web.model.PersistentProject',
 	 alias: 'PPProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 	 ,{ name: 'githubUserName', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'web.model.PPGenerationStep' , primaryKey: '_id' }
 	 	 ,{ type: 'hasMany', name: 'customProperties', associationKey: 'customProperties', model: 'web.model.PPMetaProperty' , primaryKey: '_id' }
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
 