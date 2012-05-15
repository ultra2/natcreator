Ext.define('web.model.StringProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'StringProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'string' }
 	 	 ,{ name: 'maxLength', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { field: 'defaultValue', type: 'presence' }
 	 	 ,{ field: 'maxLength', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 