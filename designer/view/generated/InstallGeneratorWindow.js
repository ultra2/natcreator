Ext.define('designer.view.generated.InstallGeneratorWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.InstallGeneratorWindow',
	height: 500,
	width: 1000,
	layout: {
		type: 'fit'
	},
	closable: false,
	title: 'Install Generator',
	modal: true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'natgrid',
					itemId: 'gridMain',
					title: 'Available generators',
					columns: [
						{
							xtype: 'gridcolumn',
							dataIndex: 'name',
							width: 400,
							text: 'Name',
							renderer: function(value,metaData,record,rowIndex,colIndex,store,view){
								var project = value.substr(0, value.indexOf('/'));
								var generator = value.substr(project.length + 1);
								return "<b><big>" + generator + "</big></b></br>" + project;
							}
						},
						{
							xtype: 'gridcolumn',
							dataIndex: 'generatorVersion',
							width: 150,
							text: 'Version'
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
						margins: '0 0 0 5'
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
							itemId: 'btnInstall',
							minWidth: 100,
							ui: 'green',
							text: 'Install'
						},
						{
							xtype: 'button',
							itemId: 'btnCancel',
							minWidth: 100,
							text: 'Cancel'
						}
					]
				}
			]
		});
		me.callParent(arguments);
	}
});
