Ext.define('web.model.RPDestroyCustomProperty', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPDestroyCustomProperty'
 	 
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
 