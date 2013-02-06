Ext.define('designer.model.RPCreateHerokuApp', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPCreateHerokuApp'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPCreateHerokuApp'));
