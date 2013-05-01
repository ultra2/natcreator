Ext.define('natcreator.model.CDEditToolboxNode', { 
	extend: 'natcreator.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('natcreator.model.CDEditToolboxNode'));
