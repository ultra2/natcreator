Ext.define('web.model.RPIsAccountAvailable', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPIsAccountAvailable'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 