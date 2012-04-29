Ext.define('designer.model.ProjectSetting', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 ,	 	 { name: 'repositoryHost', type: 'string' }
 ,	 	 { name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.GenerationStep' , primaryKey: '_id' }
 	 ]
 });
 