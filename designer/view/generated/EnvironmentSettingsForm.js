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
							itemId: 'cbFontSize'
						}
					]
				},
				{
					xtype: 'natwindow'
				}
			]
		});
		me.callParent(arguments);
	}
});
