Ext.define('web.model.PersistentM', { 
 	 extend: 'web.model.CRBaseObject',
 	 alias: 'PersistentM'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,{ name: 'modified', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,{ name: 'version', type: 'int' }
 	 	 ,{ name: 'deleted', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 