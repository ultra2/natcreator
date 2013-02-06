Ext.define('designer.view.generated.BaseEditor', { 
	extend: 'NAT.form.Panel',
	alias: 'widget.BaseEditor',
	
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
					xtype: 'nattabpanel',					
					itemId: 'tabMain',					
					tabPosition: 'bottom',					
					items: [
						{
							xtype: 'natsourceedit',							
							itemId: 'srcMeta',							
							propertyPath: 'meta',							
							parser: 'json',							
							title: 'Meta',							
							readOnly: true							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
