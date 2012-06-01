Ext.define('web.model.PersistentC', { 
 	 extend: 'web.model.CRBaseObject',
 	 alias: 'PersistentC'
 	 
 	 ,fields: [
 	 	 { name: 'created', type: 'date', debug: true }
 	 	 ,{ name: 'modified', type: 'date', debug: true }
 	 	 ,{ name: 'version', type: 'int', debug: true }
 	 	 ,{ name: 'deleted', type: 'boolean', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 