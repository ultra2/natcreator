Ext.define('designer.view.generated.ClassConfigWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigWindow',
	modal: true,
	title: 'Edit Config',
	layout: {
		type: 'fit'
	},
	resizable: false,
	width: 446,
	height: 500,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natform',
					bodyPadding: 10,
					defaults: {
						anchor: '100%',
						labelWidth: 120
					},
					itemId: 'ed',
					items: [
						{
							xtype: 'nattextfield',
							fieldLabel: 'Name',
							propertyPath: 'name',
							itemId: 'txtName'
						},
						{
							xtype: 'natstringarrayedit',
							fieldLabel: 'Types',
							height: 150,
							propertyPath: 'types',
							itemId: 'saeTypes',
							itemRenderer: function(value){
								return viewport.projectEditor.getClassConfigTypeName(value);
							}
						},
						{
							xtype: 'nattextfield',
							fieldLabel: 'Default Value',
							propertyPath: 'defaultValue',
							itemId: 'txtDefaultValue'
						},
						{
							xtype: 'natcombobox',
							editable: false,
							fieldLabel: 'Default Value',
							propertyPath: 'defaultValue',
							itemId: 'boolDefaultValue',
							comboData: [
								'true',
								'false'
							]
						},
						{
							xtype: 'datefield',
							fieldLabel: 'Default Value',
							propertyPath: 'defaultValue',
							itemId: 'dateDefaultValue'
						},
						{
							xtype: 'numberfield',
							anchor: '70%',
							hideTrigger: true,
							fieldLabel: 'Default Value',
							propertyPath: 'defaultValue',
							itemId: 'intDefaultValue'
						},
						{
							xtype: 'natstringlistfield',
							fieldLabel: 'Values',
							height: 50,
							propertyPath: 'values',
							itemId: 'memoValues'
						},
						{
							xtype: 'natstringlistfield',
							fieldLabel: 'Params',
							height: 50,
							propertyPath: 'params',
							itemId: 'memoParams'
						},
						{
							xtype: 'natstringlistfield',
							fieldLabel: 'Not Accepted',
							height: 50,
							propertyPath: 'notAccepted',
							itemId: 'memoNotAccepted'
						},
						{
							xtype: 'natcheckboxfield',
							fieldLabel: 'Dependency',
							propertyPath: 'dependency',
							itemId: 'chDependency'
						},
						{
							xtype: 'natcheckboxfield',
							fieldLabel: 'Hidden',
							propertyPath: 'hidden',
							itemId: 'chHidden'
						},
						{
							xtype: 'natcheckboxfield',
							fieldLabel: 'Advanced',
							propertyPath: 'advanced',
							itemId: 'chAdvanced'
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
							text: 'Ok',
							ui: 'green',
							minWidth: 100,
							itemId: 'btnOk'
						},
						{
							xtype: 'natbutton',
							text: 'Cancel',
							ui: 'gray',
							minWidth: 100,
							itemId: 'btnCancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
