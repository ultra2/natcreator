Ext.define('web.model.DateProperty', { 
 	 extend: 'web.model.DataProperty',
 	 alias: 'DateProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'date', defaultValue: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'defaultValue', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 