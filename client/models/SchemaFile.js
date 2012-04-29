Ext.define('designer.model.SchemaFile', { 
 	 extend: 'designer.model.File',
 	 alias: 'SchemaFile'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'source', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 