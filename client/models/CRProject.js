Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 });
 