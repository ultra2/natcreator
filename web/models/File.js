Ext.define('web.model.File', { 
 	 extend: 'web.model.Communication',
 	 alias: 'File'
 	 
 	 ,fields: [
 	 	 { name: 'content', type: 'string' }
 	 	 ,{ name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'content', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 