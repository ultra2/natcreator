Ext.define('designer.view.generated.CreateToolboxGroupWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.CreateToolboxGroupWindow',
	modal: true,
	layout: {
		type: 'fit'
	},
	title: 'New Toolbox Group',
	resizable: false,
	width: 400,
	height: 166,
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
							html: 'Type a name for the new toolbox group',
							margin: '5 0 5 0'
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
						minWidth: 80
					},
					cls: 'commandpanel',
					dock: 'bottom',
					items: [
						{
							xtype: 'natbutton',
							text: 'Ok',
							ui: 'green',
							itemId: 'btnOk'
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
