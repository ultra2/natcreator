Ext.define('web.model.Schema', { 
 	 extend: 'web.model.persistentC',
 	 alias: 'Schema'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
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
 Ext.data.NodeInterface.decorate(Ext.create('web.model.Schema'));
 