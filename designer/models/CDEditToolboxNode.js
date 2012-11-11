Ext.define('designer.model.CDEditToolboxNode', { 
	extend: 'designer.model.ClientDesigner',
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDEditToolboxNode'));
