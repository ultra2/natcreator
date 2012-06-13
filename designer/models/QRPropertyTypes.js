Ext.define('designer.model.QRPropertyTypes', { 
 	 extend: 'designer.model.QueryResult',
 	 alias: 'QRPropertyTypes'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 	 ,{ name: 'displayName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 	 ,{ field: 'displayName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 