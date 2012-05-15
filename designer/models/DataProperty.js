Ext.define('designer.model.DataProperty', { 
 	 extend: 'designer.model.persistentC',
 	 alias: 'DataProperty'
 	 
 	 ,fields: [
 	 	 { name: 'index', type: 'int' }
 	 	 ,{ name: 'isKey', type: 'boolean' }
 	 	 ,{ name: 'isDebug', type: 'boolean' }
 	 	 ,{ name: 'isNullable', type: 'boolean' }
 	 	 ,{ name: 'isArray', type: 'boolean' }
 	 	 ,{ name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'index', type: 'presence' }
 	 	 ,{ field: 'isKey', type: 'presence' }
 	 	 ,{ field: 'isDebug', type: 'presence' }
 	 	 ,{ field: 'isNullable', type: 'presence' }
 	 	 ,{ field: 'isArray', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 