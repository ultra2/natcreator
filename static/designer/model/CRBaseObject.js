Ext.define('designer.model.CRBaseObject', { 
	extend: 'NAT.data.Model',
	alias: 'CRBaseObject'
	
	,fields: [
		{ name: '_id', type: 'string' }
		,{ name: '_type', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRBaseObject'));
