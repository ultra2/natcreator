Ext.define('designer.model.PPMetaProperty', { 
 	 extend: 'designer.model.PersistentProject',
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
 