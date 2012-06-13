Ext.define('web.model.QRFrameworkItems', { 
 	 extend: 'web.model.QueryResult',
 	 alias: 'QRFrameworkItems'
 	 
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
 