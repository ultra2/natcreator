Ext.define('designer.view.generated.FileForm', { 
	extend: 'NAT.form.Panel',
	alias: 'widget.FileForm',
	
	closable: true,
	preventHeader: true,
	layout: {
		type: 'fit'		
	},
	
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
