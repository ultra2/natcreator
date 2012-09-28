Ext.define('designer.model.CDViewInspector', { 
	extend: 'designer.model.ClientDesigner',
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDViewInspector'));
