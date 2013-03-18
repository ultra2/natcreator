Ext.define('designer.view.generated.EnvironmentSettingsForm', { 
	extend: 'Ext.panel.Panel',
	alias: 'widget.EnvironmentSettingsForm',
	
	closable: true,
	layout: {
		type: 'fit'		
	},
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
							comboData: [8,9,10,11,12,14,16,18,20,22,24,26,28,36,42,72],							
							editable: false,							
							fieldLabel: 'Font Size',							
							itemId: 'cbFontSize',							
							labelWidth: 80,							
							propertyPath: 'fontSize',							
							width: 160							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Include template files into generation',							
							labelWidth: 250,							
							propertyPath: 'includeTemplateFilesIntoGeneration'							
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
