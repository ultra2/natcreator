Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: '_id', type: 'string', debug: true }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'name', type: 'string', defaultValue: 'new' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'displayName', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'remark', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'isSystem', type: 'boolean', debug: true }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'created', type: 'date', defaultValue: new Date(0) }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'modified', type: 'date', defaultValue: new Date(0), debug: true }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'deleted', type: 'boolean', debug: true }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'version', type: 'int', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 });
 