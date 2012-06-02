Ext.define('designer.model.CDMetaPropertyRow', { 
 	 extend: 'designer.model.CDMetaRow',
 	 alias: 'CDMetaPropertyRow'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'type', type: 'presence' }
 	 	 ,{ field: 'value', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDMetaPropertyRow'));
 