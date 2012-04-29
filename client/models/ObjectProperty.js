Ext.define('designer.model.ObjectProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'ObjectProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'type_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 