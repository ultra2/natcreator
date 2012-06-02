Ext.define('designer.model.PPStringProperty', { 
 	 extend: 'designer.model.PPDataProperty',
 	 alias: 'PPStringProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'string' }
 	 	 ,{ name: 'minLength', type: 'int' }
 	 	 ,{ name: 'maxLength', type: 'string' }
 	 	 ,{ name: 'vFormat', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'vFormat', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 