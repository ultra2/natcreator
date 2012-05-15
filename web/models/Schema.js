Ext.define('web.model.Schema', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'Schema'
 	 
 	 ,fields: [
 	 	 { name: 'isHierarchy', type: 'boolean' }
 	 	 ,{ name: 'parentId', type: 'string', debug: true }
 	 	 ,{ name: 'leaf', type: 'boolean', debug: true }
 	 	 ,{ name: 'depth', type: 'int', debug: true }
 	 	 ,{ name: 'index', type: 'int', debug: true }
 	 	 ,{ name: 'name', type: 'string' }
 	 	 ,{ name: 'strParam1', type: 'string' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'web.model.DataProperty' , primaryKey: '_id' }
 	 ]
 	 ,fieldInfos: [
 	 	 { field: 'isHierarchy', type: 'presence' }
 	 	 ,{ field: 'parentId', type: 'presence' }
 	 	 ,{ field: 'leaf', type: 'presence' }
 	 	 ,{ field: 'depth', type: 'presence' }
 	 	 ,{ field: 'index', type: 'presence' }
 	 	 ,{ field: 'properties', type: 'presence' }
 	 	 ,{ field: 'name', type: 'presence' }
 	 	 ,{ field: 'strParam1', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('web.model.Schema'));
 