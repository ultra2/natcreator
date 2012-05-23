Ext.define('web.model.CRMetaRow', { 
 	 extend: 'web.model.Client',
 	 alias: 'CRMetaRow'
 	 
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
 Ext.data.NodeInterface.decorate(Ext.create('web.model.CRMetaRow'));
 