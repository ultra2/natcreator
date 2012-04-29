Ext.define('designer.model.Schema', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'Schema'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'isHierarchy', type: 'boolean' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'parentId', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'leaf', type: 'boolean' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'depth', type: 'int' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'designer.model.DataProperty' , primaryKey: '_id' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.Schema'));
 