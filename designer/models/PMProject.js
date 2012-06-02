Ext.define('designer.model.PMProject', { 
 	 extend: 'designer.model.PersistentMaster',
 	 alias: 'PMProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'connections', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 