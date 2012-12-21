Ext.define('designer.view.generated.ClassConfigWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigWindow',
	height: 430,
	width: 446,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Edit Config',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					itemId: 'ed',
					defaults: {
						anchor: '100%',
						labelWidth: 120
					},
					bodyPadding: 10,
					items: [
						{
							xtype: 'natlookupfield',
							itemId: 'luType',
							propertyPath: 'type',
							fieldLabel: 'Type'
						},
						{
							xtype: 'textfield',
							itemId: 'txtName',
							propertyPath: 'name',
							fieldLabel: 'Name'
						},
						{
							xtype: 'textfield',
							itemId: 'txtDefaultValue',
							propertyPath: 'defaultValue',
							fieldLabel: 'Default Value'
						},
						{
							xtype: 'combobox',
							itemId: 'boolDefaultValue',
							propertyPath: 'defaultValue',
							fieldLabel: 'Default Value',
							editable: false
						},
						{
							xtype: 'datefield',
							itemId: 'dateDefaultValue',
							propertyPath: 'defaultValue',
							fieldLabel: 'Default Value'
						},
						{
							xtype: 'numberfield',
							itemId: 'intDefaultValue',
							propertyPath: 'defaultValue',
							fieldLabel: 'Default Value',
							hideTrigger: true,
							anchor: '70%'
						},
						{
							xtype: 'natstringlistfield',
							itemId: 'memoValues',
							propertyPath: 'values',
							height: 50,
							fieldLabel: 'Values'
						},
						{
							xtype: 'natstringlistfield',
							itemId: 'memoAccepted',
							propertyPath: 'accepted',
							height: 50,
							fieldLabel: 'Accepted'
						},
						{
							xtype: 'natstringlistfield',
							itemId: 'memoNotAccepted',
							propertyPath: 'notAccepted',
							height: 50,
							fieldLabel: 'Not Accepted'
						},
						{
							xtype: 'checkboxfield',
							itemId: 'chDependency',
							propertyPath: 'dependency',
							fieldLabel: 'Dependency'
						},
						{
							xtype: 'checkboxfield',
							itemId: 'chHidden',
							propertyPath: 'hidden',
							fieldLabel: 'Hidden'
						},
						{
							xtype: 'checkboxfield',
							itemId: 'chAdvanced',
							propertyPath: 'advanced',
							fieldLabel: 'Advanced'
						}
					],
					layout: {
						type: 'anchor'
					}
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
							itemId: 'btnOk',
							minWidth: 100,
							ui: 'green',
							text: 'Ok'
						},
						{
							xtype: 'button',
							itemId: 'btnCancel',
							minWidth: 100,
							ui: 'gray',
							text: 'Cancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
