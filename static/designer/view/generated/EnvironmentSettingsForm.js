Ext.define('designer.view.generated.EnvironmentSettingsForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.EnvironmentSettingsForm',
	
	layout: {
		type: 'fit'		
	},
	closable: true,
	preventHeader: true,
	title: 'Environment Settings',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					defaults: {					
						labelPad: 0					
					},					
					itemId: 'edSettings',					
					items: [
						{
							xtype: 'natcombobox',							
							editable: false,							
							fieldLabel: 'Font Size',							
							labelWidth: 80,							
							width: 160,							
							propertyPath: 'fontSize',							
							itemId: 'cbFontSize',							
							comboData: [8,9,10,11,12,14,16,18,20,22,24,26,28,36,42,72]							
						},						
						{
							xtype: 'natcheckboxfield',							
							propertyPath: 'includeTemplateFilesIntoGeneration',							
							fieldLabel: 'Include template files into generation',							
							labelWidth: 250							
						}						
					],					
					layout: {
						type: 'anchor'						
					}					
				},				
				{
					xtype: 'natwindow'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
