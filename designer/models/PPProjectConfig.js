Ext.define('designer.model.PPProjectConfig', { 
 	 extend: 'designer.model.PersistentProject',
 	 alias: 'PPProjectConfig'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'customProperties', associationKey: 'customProperties', model: 'designer.model.PPMetaProperty' , primaryKey: '_id' }
 	 ]
 	 ,validations: [
 	 	 { field: 'customProperties', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 