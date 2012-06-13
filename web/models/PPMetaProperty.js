Ext.define('web.model.PPMetaProperty', { 
 	 extend: 'web.model.PersistentProject',
 	 alias: 'PPMetaProperty'
 	 
 	 ,fields: [
 	 	 { name: 'frameworkItem_id', type: 'string' }
 	 	 ,{ name: 'propertyType_id', type: 'string' }
 	 	 ,{ name: 'propertyName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'frameworkItem_id', type: 'presence' }
 	 	 ,{ field: 'propertyType_id', type: 'presence' }
 	 	 ,{ field: 'propertyName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 