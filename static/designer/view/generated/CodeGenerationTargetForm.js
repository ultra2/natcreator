Ext.define('designer.view.generated.CodeGenerationTargetForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.CodeGenerationTargetForm',
	
	title: 'Code Generation Target',
	closable: true,
	preventHeader: true,
	bodyPadding: 10,
	layout: {
		type: 'fit'		
	},
	
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
