Ext.define('web.model.PMAccountProject', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMAccountProject'
 	 
 	 ,fields: [
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
 