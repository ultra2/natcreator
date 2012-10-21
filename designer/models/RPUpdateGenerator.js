Ext.define('designer.model.RPUpdateGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPUpdateGenerator'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPUpdateGenerator'));
