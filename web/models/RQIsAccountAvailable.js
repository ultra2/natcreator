Ext.define('web.model.RQIsAccountAvailable', { 
 	 extend: 'web.model.Request',
 	 alias: 'RQIsAccountAvailable'
 	 
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
 