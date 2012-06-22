Ext.define('web.model.CDManagerMenu', { 
 	 extend: 'web.model.ClientDesigner',
 	 alias: 'CDManagerMenu'
 	 
 	 ,fields: [
 	 	 { name: 'parentId', type: 'string' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'parentId', type: 'presence' }
 	 	 ,{ field: 'depth', type: 'presence' }
 	 	 ,{ field: 'leaf', type: 'presence' }
 	 	 ,{ field: 'index', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('web.model.CDManagerMenu'));
 