Ext.define('web.model.DataProperty', { 
 	 extend: 'web.model.persistentC',
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
 	 ,fieldInfos: [
 	 	 { name: 'index' }
 	 	 ,{ name: 'isKey' }
 	 	 ,{ name: 'isDebug' }
 	 	 ,{ name: 'isNullable' }
 	 	 ,{ name: 'isArray' }
 	 	 ,{ name: 'name' }
 	 ]
 });
 