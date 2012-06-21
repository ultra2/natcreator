Ext.define('web.model.PPProjectData', { 
 	 extend: 'web.model.PersistentProject',
 	 alias: 'PPProjectData'
 	 
 	 ,fields: [
 	 	 { name: 'githubToken', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'githubToken', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 