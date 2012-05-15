Ext.define('web.model.BooleanProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'BooleanProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'defaultValue', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 