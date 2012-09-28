Ext.define('web.model.CDViewNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDViewNode'));
