Ext.define('designer.model.RPInstallGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPInstallGenerator'
	
	,fields: [
		{ name: 'sharedGeneratorId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'sharedGeneratorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPInstallGenerator'));
