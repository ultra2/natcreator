Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 
 	 fields: [
 	 	 , { name: '_id', type: 'string' }
 	 	 , { name: 'name', type: 'string' }
 	 	 , { name: 'displayName', type: 'string' }
 	 	 , { name: 'remark', type: 'string' }
 	 	 , { name: 'isSystem', type: 'boolean' }
 	 	 , { name: 'created', type: 'date' }
 	 	 , { name: 'modified', type: 'date' }
 	 	 , { name: 'deleted', type: 'boolean' }
 	 	 , { name: 'version', type: 'int' }
 	 ],
 });
 