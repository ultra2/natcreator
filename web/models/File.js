Ext.define('web.model.File', { 
 	 extend: 'web.model.communication',
 	 alias: 'File'
 	 
 	 ,fields: [
 	 	 { name: 'content', type: 'string' }
 	 	 ,{ name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'content' }
 	 	 ,{ name: 'name' }
 	 ]
 });
 