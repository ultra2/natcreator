Ext.define('designer.model.DateProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'DateProperty'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'defaultValue', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 ]
 	 ,associations: [
 	 ]
 });
 