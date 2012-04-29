Ext.define('designer.model.StringProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'StringProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'defaultValue', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'maxLength', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
 