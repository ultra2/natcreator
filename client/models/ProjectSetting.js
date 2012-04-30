Ext.define('designer.model.ProjectSetting', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'generationSteps', model: 'designer.model.GenerationStep' }
 	 ]
 });
 