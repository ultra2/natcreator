Ext.define('designer.model.CRAccountProject', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'account_id', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'project_id', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'role_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 