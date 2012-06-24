Ext.define('designer.model.PPStringProperty', { 
 	 extend: 'designer.model.PPDataProperty',
 	 alias: 'PPStringProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'string' }
 	 	 ,{ name: 'minLength', type: 'int' }
 	 	 ,{ name: 'vFormat', type: 'string' }
 	 	 ,{ name: 'maxLength', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'vFormat', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 