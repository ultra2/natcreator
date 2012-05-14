Ext.define('designer.model.Schema', { 
 	 extend: 'designer.model.persistentC',
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
 	 	 { type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'designer.model.DataProperty' , primaryKey: '_id' }
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'isHierarchy' }
 	 	 ,{ name: 'parentId' }
 	 	 ,{ name: 'leaf' }
 	 	 ,{ name: 'depth' }
 	 	 ,{ name: 'index' }
 	 	 ,{ name: 'properties' }
 	 	 ,{ name: 'name' }
 	 	 ,{ name: 'strParam1' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.Schema'));
 