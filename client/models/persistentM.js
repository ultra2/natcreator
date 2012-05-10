Ext.define('designer.model.persistentM', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'persistentM'
 	 
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
 