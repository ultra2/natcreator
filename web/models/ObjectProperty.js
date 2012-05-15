Ext.define('web.model.ObjectProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'ObjectProperty'
 	 
 	 ,fields: [
 	 	 { name: 'type_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'type', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 