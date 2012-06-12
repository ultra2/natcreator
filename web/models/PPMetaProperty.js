Ext.define('web.model.PPMetaProperty', { 
 	 extend: 'web.model.PersistentProject',
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
 