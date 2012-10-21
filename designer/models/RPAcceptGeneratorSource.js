Ext.define('designer.model.RPAcceptGeneratorSource', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPAcceptGeneratorSource'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPAcceptGeneratorSource'));
