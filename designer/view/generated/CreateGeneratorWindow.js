Ext.define('designer.view.generated.CreateGeneratorWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.CreateGeneratorWindow',
	height: 150,
	width: 400,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'New Generator',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'ed',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'component',
							html: 'Type a name for the new generator',
							margin: '5 0 5 0'
						},
						{
							xtype: 'textfield',
							itemId: 'txtName',
							propertyPath: 'name',
							fieldLabel: 'Name',
							labelWidth: 60
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					dock: 'bottom',
					cls: 'commandpanel',
					height: 30,
					defaults: {
						margins: '0 0 0 5',
						autoWidth: true
					},
					layout: {
						type: 'hbox',
						align: 'middle',
						pack: 'end',
						padding: '5'
					},
					items: [
						{
							xtype: 'button',
							itemId: 'btnSave',
							ui: 'green',
							text: 'Save'
						},
						{
							xtype: 'button',
							itemId: 'btnCancel',
							text: 'Cancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
