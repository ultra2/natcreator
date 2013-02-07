Ext.define('designer.model.RPIsAuthenticated', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsAuthenticated'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPIsAuthenticated'));
