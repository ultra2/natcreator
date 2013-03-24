Ext.define('designer.model.CDClassMetaNode', { 
	extend: 'designer.model.ClientDesigner'
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'reference', type: 'auto' }
		,{ name: 'userConfig', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDClassMetaNode'));
