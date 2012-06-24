Ext.define('designer.model.CDFrameworkItem', { 
 	 extend: 'designer.model.ClientDesigner',
 	 alias: 'CDFrameworkItem'
 	 
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
 