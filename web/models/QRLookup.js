Ext.define('web.model.QRLookup', { 
 	 extend: 'web.model.QueryResult',
 	 alias: 'QRLookup'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 