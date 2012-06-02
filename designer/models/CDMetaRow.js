Ext.define('designer.model.CDMetaRow', { 
 	 extend: 'designer.model.ClientDesigner',
 	 alias: 'CDMetaRow'
 	 
 	 ,fields: [
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
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDMetaRow'));
 