Ext.define('designer.model.ObjectProperty', { 
 	 extend: 'designer.model.DataProperty',
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
 