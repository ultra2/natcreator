Ext.define('designer.model.CRBaseObject', { 
	extend: 'natjs.data.NATModel',
	alias: 'CRBaseObject'
	
	,fields: [
		{ name: '_id', type: 'string', debug: true }
		,{ name: '_type', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRBaseObject'));
