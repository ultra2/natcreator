Ext.define('designer.view.generated.GeneratorForm', {
	extend: 'NAT.form.Panel',
	alias: 'widget.GeneratorForm',
	closable: true,
	preventHeader: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattabpanel',
					itemId: 'tabGenerator',
					flex: 1,
					tabPosition: 'bottom',
					items: [
						{
							xtype: 'natsourceedit',
							itemId: 'srcSource',
							propertyPath: 'source',
							title: 'Source'
						},
						{
							xtype: 'natsourceedit',
							itemId: 'srcSharedSource',
							propertyPath: 'sharedSource',
							title: 'Shared Source'
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'top',
					itemId: 'tbMain',
					items: [
						{
							xtype: 'button',
							itemId: 'btnUndo',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/undo.png',
							tooltip: 'Undo'
						},
						{
							xtype: 'button',
							itemId: 'btnRedo',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/redo.png',
							tooltip: 'Redo'
						},
						{
							xtype: 'button',
							itemId: 'btnHelp',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/help.png',
							tooltip: 'Help'
						},
						{
							xtype: 'button',
							itemId: 'btnEdit',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/edit.png',
							tooltip: 'Edit'
						},
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'button',
							itemId: 'btnAcceptSource',
							icon: 'https://extsolutions.herokuapp.com/graphics/Momentum_MatteEntireSet1/16/code-accept.png',
							tooltip: 'Overrides the shared source of this generator and increases the version number.'
						},
						{
							xtype: 'tbtext',
							itemId: 'txtGeneratorVersion',
							text: 'Version: 1.0'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
