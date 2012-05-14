Ext.define('web.model.CRMetaRow', { 
 	 extend: 'web.model.client',
 	 alias: 'CRMetaRow'
 	 
 	 ,fields: [
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
 