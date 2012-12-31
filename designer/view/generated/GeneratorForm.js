Ext.define('designer.view.generated.GeneratorForm', {
	extend: 'NAT.form.Panel',
	alias: 'widget.GeneratorForm',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	preventHeader: true,
	closable: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattabpanel',
					tabPosition: 'bottom',
					flex: 1,
					itemId: 'tabGenerator',
					items: [
						{
							xtype: 'natsourceedit',
							title: 'Source',
							propertyPath: 'source',
							itemId: 'srcSource'
						},
						{
							xtype: 'natsourceedit',
							title: 'Shared Source',
							propertyPath: 'sharedSource',
							itemId: 'srcSharedSource'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					itemId: 'tbMain',
					dock: 'top',
					items: [
						{
							xtype: 'natbutton',
							tooltip: 'Undo',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/undo.png',
							itemId: 'btnUndo'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Redo',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/redo.png',
							itemId: 'btnRedo'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Help',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/help.png',
							itemId: 'btnHelp'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Edit',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',
							itemId: 'btnEdit'
						},
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'natbutton',
							tooltip: 'Overrides the shared source of this generator and increases the version number.',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/code-accept.png',
							itemId: 'btnAcceptSource'
						},
						{
							xtype: 'tbtext',
							text: 'Version: 1.0',
							itemId: 'txtGeneratorVersion'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
