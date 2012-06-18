Ext.define('web.model.RPDestroyCustomProperty', { 
 	 extend: 'web.model.RequestPost',
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
 