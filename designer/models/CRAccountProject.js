Ext.define('designer.model.CRAccountProject', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 { name: 'account_id', type: 'string' }
 	 	 ,{ name: 'project_id', type: 'string' }
 	 	 ,{ name: 'role_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'account_id', type: 'presence' }
 	 	 ,{ field: 'project_id', type: 'presence' }
 	 	 ,{ field: 'role_id', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 