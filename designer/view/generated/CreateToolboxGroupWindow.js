Ext.define('designer.view.generated.CreateToolboxGroupWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.CreateToolboxGroupWindow',
	height: 166,
	width: 400,
	resizable: false,
	title: 'New Toolbox Group',
	layout: {
		type: 'fit'
	},
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
							margin: '5 0 5 0',
							html: 'Type a name for the new toolbox group'
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
					defaults: {
						margins: '0 0 0 5',
						minWidth: 80
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
							itemId: 'btnOk',
							ui: 'green',
							text: 'Ok'
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
