Ext.define('designer.model.PPMetaProperty', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPMetaProperty'
 	 
 	 ,fields: [
 	 	 { name: 'frameworkItem_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'frameworkItem_id', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 