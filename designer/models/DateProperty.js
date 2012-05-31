Ext.define('designer.model.DateProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'DateProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'date', defaultValue: new Date(0) }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'defaultValue', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 