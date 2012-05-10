Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string', debug: true }
 	 	 ,{ name: 'isSystem', type: 'boolean', debug: true }
 	 	 ,{ name: 'deleted', type: 'boolean', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: '_id' }
 	 	 ,{ name: 'isSystem' }
 	 	 ,{ name: 'deleted' }
 	 ]
 });
 