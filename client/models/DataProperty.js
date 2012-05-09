Ext.define('designer.model.DataProperty', { 
 	 extend: 'designer.model.entity',
 	 alias: 'DataProperty'
 	 
 	 ,fields: [
 	 	 { name: 'index', type: 'int' }
 	 	 ,{ name: 'isKey', type: 'boolean' }
 	 	 ,{ name: 'isDebug', type: 'boolean' }
 	 	 ,{ name: 'isNullable', type: 'boolean' }
 	 	 ,{ name: 'isArray', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
 