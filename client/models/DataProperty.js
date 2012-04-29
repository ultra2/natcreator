Ext.define('designer.model.DataProperty', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'DataProperty'
 	 
 	 ,fields: [
 	 	 ,{ name: 'index', type: 'int' }
 	 	 ,{ name: 'isKey', type: 'boolean' }
 	 	 ,{ name: 'isDebug', type: 'boolean' }
 	 	 ,{ name: 'isNullable', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
 