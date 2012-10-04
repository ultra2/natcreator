Ext.define('designer.model.CDViewNode', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDViewNode'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'userConfig', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDViewNode'));
