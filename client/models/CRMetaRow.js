Ext.define('designer.model.CRMetaRow', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRMetaRow'
 	 
 	 ,fields: [
 	 	 { name: 'parentId', type: 'string' }
 ,	 	 { name: 'depth', type: 'int' }
 ,	 	 { name: 'leaf', type: 'boolean' }
 ,	 	 { name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaRow'));
 