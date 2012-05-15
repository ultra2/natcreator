Ext.define('web.model.CRMetaPropertyRow', { 
 	 extend: 'web.model.CRMetaRow',
 	 alias: 'CRMetaPropertyRow'
 	 
 	 ,fields: [
 	 	 { name: 'type', type: 'string' }
 	 	 ,{ name: 'value', type: 'auto' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,fieldInfos: [
 	 	 { name: 'type' }
 	 	 ,{ name: 'value' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('web.model.CRMetaPropertyRow'));
 