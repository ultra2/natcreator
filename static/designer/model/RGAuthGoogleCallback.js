Ext.define('designer.model.RGAuthGoogleCallback', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGAuthGoogleCallback'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGAuthGoogleCallback'));
