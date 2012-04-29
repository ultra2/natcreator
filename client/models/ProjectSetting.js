Ext.define('designer.model.ProjectSetting', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'repositoryName', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'repositoryHost', type: 'string' }
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 function comma() {
    if (isFirstComma) return '';
    return ',';
}{ type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.GenerationStep' , primaryKey: '_id' }
 	 ]
 });
 