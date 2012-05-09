Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.entity',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 });
 