Ext.define('web.model.CDEditToolboxNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDEditToolboxNode'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDEditToolboxNode'));
