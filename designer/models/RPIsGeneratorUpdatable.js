Ext.define('designer.model.RPIsGeneratorUpdatable', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsGeneratorUpdatable'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPIsGeneratorUpdatable'));
