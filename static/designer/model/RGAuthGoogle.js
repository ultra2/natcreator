Ext.define('designer.model.RGAuthGoogle', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGAuthGoogle'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGAuthGoogle'));
