Ext.define('designer.model.PPProjectSetting', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPProjectSetting'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
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
 