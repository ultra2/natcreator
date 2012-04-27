Ext.define('designer.model.Schema', { 
 	 extend: 'designer.model.CRBaseObject'
 	 
 	 ,fields: [
 	 	 ,{ name: 'isHierarchy', type: 'boolean' }
 	 	 ,{ name: 'parentId', type: 'string' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 });
 