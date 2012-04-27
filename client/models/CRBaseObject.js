Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel'
 	 
 	 ,fields: [
 	 	 ,{ name: '_id', type: 'string', debug: true }
 	 	 ,{ name: 'name', type: 'string', defaultValue: 'new' }
 	 	 ,{ name: 'displayName', type: 'string' }
 	 	 ,{ name: 'remark', type: 'string' }
 	 	 ,{ name: 'isSystem', type: 'boolean', debug: true }
 	 	 ,{ name: 'created', type: 'date', defaultValue: new Date() }
 	 	 ,{ name: 'modified', type: 'date', defaultValue: new Date(), debug: true }
 	 	 ,{ name: 'deleted', type: 'boolean', debug: true }
 	 	 ,{ name: 'version', type: 'int', debug: true }
 	 ],
 });
 