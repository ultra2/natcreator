Ext.define('designer.model.CRMetaPropertyRow', { 
 	 extend: 'designer.model.CRMetaRow'
 	 
 	 ,fields: [
 	 	 ,{ name: 'type', type: 'string' }
 	 	 ,{ name: 'value', type: 'auto' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaPropertyRow'));
 