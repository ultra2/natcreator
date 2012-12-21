Ext.define('designer.view.generated.EnvironmentSettingsForm', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.EnvironmentSettingsForm',
	title: 'Environment Settings',
	preventHeader: true,
	closable: true,
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
					defaults: {
						labelPad: 0
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'combobox',
							itemId: 'cbFontSize',
							propertyPath: 'fontSize',
							width: 160,
							labelWidth: 80,
							fieldLabel: 'Font Size',
							editable: false
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
