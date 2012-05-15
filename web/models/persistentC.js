Ext.define('web.model.persistentC', { 
 	 extend: 'web.model.CRBaseObject',
 	 alias: 'persistentC'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,{ name: 'modified', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,{ name: 'version', type: 'int' }
 	 	 ,{ name: 'deleted', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'created' }
 	 	 ,{ name: 'modified' }
 	 	 ,{ name: 'version' }
 	 	 ,{ name: 'deleted' }
 	 ]
 });
 