Ext.define('web.model.CRAccountProject', { 
 	 extend: 'web.model.PersistentM',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 { name: 'account_id', type: 'string', defaultValue: 'undefined' }
 	 	 ,{ name: 'project_id', type: 'string', defaultValue: 'undefined' }
 	 	 ,{ name: 'role_id', type: 'string', defaultValue: 'undefined' }
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
 