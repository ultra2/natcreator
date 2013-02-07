Ext.define('designer.model.RPLogout', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPLogout'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPLogout'));
