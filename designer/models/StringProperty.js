Ext.define('designer.model.StringProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'StringProperty'
 	 
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
 