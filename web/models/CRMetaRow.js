Ext.define('web.model.CRMetaRow', { 
 	 extend: 'web.model.client',
 	 alias: 'CRMetaRow'
 	 
 	 ,fields: [
 	 	 { name: 'parentId', type: 'string' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'parentId' }
 	 	 ,{ name: 'depth' }
 	 	 ,{ name: 'leaf' }
 	 	 ,{ name: 'index' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('web.model.CRMetaRow'));
 