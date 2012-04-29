Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string', debug: true }
 	 	 ,	 	 { name: 'name', type: 'string', defaultValue: 'new' }
 	 	 ,	 	 { name: 'displayName', type: 'string' }
 	 	 ,	 	 { name: 'remark', type: 'string' }
 	 	 ,	 	 { name: 'isSystem', type: 'boolean', debug: true }
 	 	 ,	 	 { name: 'created', type: 'date', defaultValue: new Date(0) }
 	 	 ,	 	 { name: 'modified', type: 'date', defaultValue: new Date(0), debug: true }
 	 	 ,	 	 { name: 'deleted', type: 'boolean', debug: true }
 	 	 ,	 	 { name: 'version', type: 'int', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 });
 