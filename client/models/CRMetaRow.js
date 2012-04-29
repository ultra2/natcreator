Ext.define('designer.model.CRMetaRow', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRMetaRow'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'parentId', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'depth', type: 'int' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'leaf', type: 'boolean' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaRow'));
 