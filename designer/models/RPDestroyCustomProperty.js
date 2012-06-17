Ext.define('designer.model.RPDestroyCustomProperty', { 
 	 extend: 'designer.model.RequestPost',
 	 alias: 'RPDestroyCustomProperty'
 	 
 	 ,fields: [
 	 	 { name: 'propertyId', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'propertyId', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 