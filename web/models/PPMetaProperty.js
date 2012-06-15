Ext.define('web.model.PPMetaProperty', { 
 	 extend: 'web.model.PersistentProject',
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
 