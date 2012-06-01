Ext.define('web.model.IsAccountAvailable', { 
 	 extend: 'web.model.Communication',
 	 alias: 'IsAccountAvailable'
 	 
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
 