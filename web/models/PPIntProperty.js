Ext.define('web.model.PPIntProperty', { 
 	 extend: 'web.model.PPDataProperty',
 	 alias: 'PPIntProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'int' }
 	 	 ,{ name: 'minValue', type: 'int' }
 	 	 ,{ name: 'maxValue', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 