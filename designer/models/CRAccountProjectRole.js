Ext.define('designer.model.CRAccountProjectRole', { 
 	 extend: 'designer.model.persistentM',
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
 