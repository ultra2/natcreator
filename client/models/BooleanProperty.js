Ext.define('designer.model.BooleanProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'BooleanProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'defaultValue', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
 