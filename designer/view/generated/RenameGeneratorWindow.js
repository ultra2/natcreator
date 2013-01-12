Ext.define('designer.view.generated.RenameGeneratorWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.RenameGeneratorWindow',
	modal: true,
	title: 'Rename Generator',
	layout: {
		type: 'fit'
	},
	resizable: false,
	width: 400,
	height: 150,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					itemId: 'ed',
					items: [
						{
							xtype: 'component',
							html: 'Type a new name for the generator',
							margin: '2 0 2 0'
						},
						{
							xtype: 'nattextfield',
							labelWidth: 60,
							fieldLabel: 'Name',
							propertyPath: 'name',
							itemId: 'txtName'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'container',
					layout: {
						type: 'hbox',
						padding: '5',
						pack: 'end',
						align: 'middle'
					},
					defaults: {
						margins: '0 0 0 5',
						autoWidth: true
					},
					height: 30,
					cls: 'commandpanel',
					dock: 'bottom',
					items: [
						{
							xtype: 'natbutton',
							text: 'Save',
							ui: 'green',
							itemId: 'btnSave'
						},
						{
							xtype: 'natbutton',
							text: 'Cancel',
							itemId: 'btnCancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
