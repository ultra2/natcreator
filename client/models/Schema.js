Ext.define('designer.model.Schema', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'Schema'
 	 
 	 ,fields: [
 	 	 { name: 'isHierarchy', type: 'boolean' }
 	 	 ,{ name: 'parentId', type: 'string' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'designer.model.DataProperty', primaryKey: '_id' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.Schema'));
 