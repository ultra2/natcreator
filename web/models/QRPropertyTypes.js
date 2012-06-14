Ext.define('web.model.QRPropertyTypes', { 
 	 extend: 'web.model.QueryResult',
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
 