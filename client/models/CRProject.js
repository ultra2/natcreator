Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.CRBaseObject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 ,{ type: 'belongsTo', name: 'connection', model: 'CRConnection' }
 	 ]
 });
 