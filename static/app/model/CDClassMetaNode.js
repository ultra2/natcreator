Ext.define('natcreator.model.CDClassMetaNode', { 
	extend: 'natcreator.model.ClientDesigner'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'reference', type: 'auto' }
		,{ name: 'userConfig', type: 'auto' }
		,{ name: 'designer', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('natcreator.model.CDClassMetaNode'));
