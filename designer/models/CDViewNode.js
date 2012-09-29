Ext.define('designer.model.CDViewNode', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'viewId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDViewNode'));
