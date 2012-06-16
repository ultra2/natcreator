Ext.define('designer.model.RPDestroyCustomProperty', { 
 	 extend: 'designer.model.RequestPost',
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
 