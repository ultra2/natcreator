Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 });
 