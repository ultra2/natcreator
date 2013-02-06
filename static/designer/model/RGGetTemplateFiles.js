Ext.define('designer.model.RGGetTemplateFiles', { 
	extend: 'designer.model.RequestGet',
	alias: 'RGGetTemplateFiles'
	
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RGGetTemplateFiles'));
