Ext.define('designer.model.QRLookup', { 
	extend: 'designer.model.QueryResult',
	alias: 'QRLookup'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.QRLookup'));
