Ext.define('designer.model.StringProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'StringProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'string' }
 	 	 ,{ name: 'minLength', type: 'int' }
 	 	 ,{ name: 'maxLength', type: 'string' }
 	 	 ,{ name: 'regex', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'regex', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 