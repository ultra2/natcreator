Ext.define('designer.model.CRMetaPropertyRow', { 
 	 extend: 'designer.model.CRMetaRow',
 	 alias: 'CRMetaPropertyRow'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'type', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'value', type: 'auto' }
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaPropertyRow'));
 