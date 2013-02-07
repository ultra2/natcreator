Ext.define('designer.model.QRLookup', { 
	extend: 'designer.model.QueryResult',
	alias: 'QRLookup'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.QRLookup'));
