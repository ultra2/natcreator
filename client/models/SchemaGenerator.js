Ext.define('designer.model.SchemaGenerator', { 
 	 extend: 'designer.model.Generator',
 	 alias: 'SchemaGenerator'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'source', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 