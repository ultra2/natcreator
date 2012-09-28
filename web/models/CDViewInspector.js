Ext.define('web.model.CDViewInspector', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDViewInspector'
	
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
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDViewInspector'));
