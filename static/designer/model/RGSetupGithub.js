Ext.define('designer.model.RGSetupGithub', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGSetupGithub'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGSetupGithub'));
