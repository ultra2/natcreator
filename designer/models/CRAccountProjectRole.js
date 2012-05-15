Ext.define('designer.model.CRAccountProjectRole', { 
 	 extend: 'designer.model.PersistentM',
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
 