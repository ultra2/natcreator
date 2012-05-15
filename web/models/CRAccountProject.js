Ext.define('web.model.CRAccountProject', { 
 	 extend: 'web.model.persistentM',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 { name: 'account_id', type: 'string' }
 	 	 ,{ name: 'project_id', type: 'string' }
 	 	 ,{ name: 'role_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'account' }
 	 	 ,{ name: 'project' }
 	 	 ,{ name: 'role' }
 	 ]
 });
 