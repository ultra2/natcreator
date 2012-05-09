Ext.define('designer.model.CRMetaPropertyRow', { 
 	 extend: 'designer.model.CRMetaRow',
 	 alias: 'CRMetaPropertyRow'
 	 
 	 ,fields: [
 	 	 { name: 'type', type: 'string' }
 	 	 ,{ name: 'value', type: 'auto' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'type }
 	 	 ,{ name: 'value }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaPropertyRow'));
 