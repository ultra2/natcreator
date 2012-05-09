Ext.define('designer.model.entity', { 
 	 extend: 'designer.model.persistent',
 	 alias: 'entity'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string', defaultValue: 'new' }
 	 	 ,{ name: 'displayName', type: 'string' }
 	 	 ,{ name: 'remark', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 