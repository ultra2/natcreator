Ext.define('designer.model.PersistentM', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'PersistentM'
 	 
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
 