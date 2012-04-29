Ext.define('designer.model.CRConnection', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRConnection'
 	 
 	 ,fields: [
 ,	 	 { name: 'username', type: 'string' }
 ,	 	 { name: 'password', type: 'string' }
 ,	 	 { name: 'database', type: 'string' }
 ,	 	 { name: 'server', type: 'string' }
 ,	 	 { name: 'port', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
 