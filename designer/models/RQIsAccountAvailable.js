Ext.define('designer.model.RQIsAccountAvailable', { 
 	 extend: 'designer.model.RequestPost',
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
 