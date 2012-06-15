Ext.define('designer.model.CDPropertyTypes', { 
 	 extend: 'designer.model.ClientDesigner',
 	 alias: 'CDPropertyTypes'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 	 ,{ name: 'displayName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 	 ,{ field: 'displayName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 