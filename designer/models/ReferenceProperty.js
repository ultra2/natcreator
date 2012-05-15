Ext.define('designer.model.ReferenceProperty', { 
 	 extend: 'designer.model.DataProperty',
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
 