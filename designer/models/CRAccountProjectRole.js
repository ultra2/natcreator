Ext.define('designer.model.CRAccountProjectRole', { 
 	 extend: 'designer.model.PersistentMaster',
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
 