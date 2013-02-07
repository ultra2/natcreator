Ext.define('designer.model.ClientDesigner', { 
	extend: 'designer.model.CRBaseObject',
	alias: 'ClientDesigner'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.ClientDesigner'));
