Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: '_id', type: 'length', min: 0, max: 20 }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 