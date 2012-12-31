Ext.define('designer.view.generated.RenameGeneratorWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.RenameGeneratorWindow',
	height: 150,
	width: 400,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Rename Generator',
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
							margin: '2 0 2 0',
							html: 'Type a new name for the generator'
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
							xtype: 'natbutton',
							itemId: 'btnSave',
							ui: 'green',
							text: 'Save'
						},
						{
							xtype: 'natbutton',
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
