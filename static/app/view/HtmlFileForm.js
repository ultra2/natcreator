Ext.define('natcreator.view.HtmlFileForm', { 
	extend: 'NAT.form.Panel',
	alias: 'widget.HtmlFileForm',
	
	closable: true,
	layout: {
		type: 'fit'		
	},
	preventHeader: true,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nathtmleditor',					
					itemId: 'srcContent',					
					propertyPath: 'content'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
