Ext.define('designer.model.CRAccountProject', { 
 	 extend: 'designer.model.persistentM',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 { name: 'account_id', type: 'string' }
 	 	 ,{ name: 'project_id', type: 'string' }
 	 	 ,{ name: 'role_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { field: 'account', type: 'presence' }
 	 	 ,{ field: 'project', type: 'presence' }
 	 	 ,{ field: 'role', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 