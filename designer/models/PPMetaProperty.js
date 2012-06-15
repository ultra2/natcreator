Ext.define('designer.model.PPMetaProperty', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPMetaProperty'
 	 
 	 ,fields: [
 	 	 { name: 'frameworkItem', type: 'string' }
 	 	 ,{ name: 'propertyType', type: 'string' }
 	 	 ,{ name: 'propertyName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'frameworkItem', type: 'presence' }
 	 	 ,{ field: 'propertyType', type: 'presence' }
 	 	 ,{ field: 'propertyName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 