Ext.define('web.model.CRAccountProjectRole', { 
 	 extend: 'web.model.PersistentM',
 	 alias: 'CRAccountProjectRole'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 