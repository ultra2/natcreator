Ext.define('designer.model.File', { 
 	 extend: 'designer.model.communication',
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
 