Ext.define('designer.view.generated.FileForm', { 
	extend: 'NAT.form.Panel',
	alias: 'widget.FileForm',
	
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
					xtype: 'natsourceedit',					
					itemId: 'srcContent',					
					propertyPath: 'content'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
