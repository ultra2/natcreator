Ext.define('designer.model.ReferenceProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'ReferenceProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'type_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 