Ext.define('designer.model.RPAcquireGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPAcquireGenerator'
	
	,fields: [
		{ name: 'generatorId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generatorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPAcquireGenerator'));
