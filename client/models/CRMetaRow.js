Ext.define('designer.model.CRMetaRow', { 
 	 extend: 'designer.model.CRBaseObject'
 	 
 	 ,fields: [
 	 	 ,{ name: 'parentId', type: 'string' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 });
 