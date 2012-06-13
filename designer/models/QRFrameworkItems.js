Ext.define('designer.model.QRFrameworkItems', { 
 	 extend: 'designer.model.QueryResult',
 	 alias: 'QRFrameworkItems'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 	 ,{ name: 'frameworkName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 	 ,{ field: 'frameworkName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 