Ext.define('web.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: '_id', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 