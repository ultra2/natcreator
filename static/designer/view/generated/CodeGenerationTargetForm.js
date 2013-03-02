Ext.define('designer.view.generated.CodeGenerationTargetForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationTargetForm',
	
	bodyPadding: 10,
	closable: true,
	layout: {
		type: 'fit'		
	},
	preventHeader: true,
	title: 'Code Generation Target',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',					
					itemId: 'edSettings',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						,						
						,						
												
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
