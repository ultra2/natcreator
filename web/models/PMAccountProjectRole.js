Ext.define('web.model.PMAccountProjectRole', { 
 	 extend: 'web.model.PersistentMaster',
 	 alias: 'PMAccountProjectRole'
 	 
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
 