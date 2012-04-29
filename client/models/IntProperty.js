Ext.define('designer.model.IntProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'IntProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'defaultValue', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
 