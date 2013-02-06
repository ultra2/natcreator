Ext.define('designer.model.RPCloseProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPCloseProject'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPCloseProject'));
