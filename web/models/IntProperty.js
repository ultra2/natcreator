Ext.define('web.model.IntProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'IntProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'defaultValue', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 