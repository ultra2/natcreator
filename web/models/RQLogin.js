Ext.define('web.model.RQLogin', { 
 	 extend: 'web.model.Request',
 	 alias: 'RQLogin'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'username', type: 'presence' }
 	 	 ,{ field: 'password', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 