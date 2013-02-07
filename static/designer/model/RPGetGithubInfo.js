Ext.define('designer.model.RPGetGithubInfo', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPGetGithubInfo'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPGetGithubInfo'));
