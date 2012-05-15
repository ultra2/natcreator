Ext.define('web.model.ReferenceProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'ReferenceProperty'
 	 
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
 