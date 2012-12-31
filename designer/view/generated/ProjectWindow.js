Ext.define('designer.view.generated.ProjectWindow', {
	extend: 'NAT.window.Window',
	alias: 'widget.ProjectWindow',
	activeItem: '1',
	layout: {
		type: 'card'
	},
	modal: true,
	title: 'New Project',
	resizable: false,
	width: 600,
	height: 560,
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
					itemId: 'edProject0',
					items: [
						{
							xtype: 'natgrid',
							forceFit: true,
							flex: 1,
							title: 'Project Templates',
							itemId: 'gridProjectTemplates',
							columns: [
								{
									xtype: 'gridcolumn',
									text: 'Name',
									dataIndex: 'name',
									width: 50
								},
								{
									xtype: 'gridcolumn',
									text: 'Description',
									dataIndex: 'description'
								}
							]
						},
						{
							xtype: 'textfield',
							labelWidth: 80,
							fieldLabel: 'Name',
							propertyPath: 'name',
							itemId: 'txtName'
						},
						{
							xtype: 'textarea',
							labelWidth: 80,
							fieldLabel: 'Description',
							propertyPath: 'description',
							itemId: 'txtDescription'
						}
					]
				},
				{
					xtype: 'natform',
					title: 'MongoDB connection to project\'s metadata database',
					bodyPadding: 10,
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					itemId: 'edProject1',
					items: [
						{
							xtype: 'component',
							margins: '5 0 5 0',
							html: 'You need to provide a MongoDB database connection where your project\'s metadata  will be stored. Your generated web application\'s data can be elsewhere.'
						},
						{
							xtype: 'natform',
							layout: {
								type: 'vbox',
								align: 'stretch'
							},
							height: 250,
							margins: '5 0 5 0',
							itemId: 'edConnection',
							items: [
								{
									xtype: 'natfieldset',
									defaults: {
										anchor: '100%'
									},
									items: [
										{
											xtype: 'textfield',
											labelWidth: 40,
											labelPad: 0,
											fieldLabel: 'Url',
											margin: '0',
											propertyPath: 'url',
											itemId: 'txtUrl'
										},
										{
											xtype: 'component',
											margin: '0 0 0 40',
											html: 'mongodb://user:password@ds012345.mongolab.com:12345/databasename',
											cls: 'small-label'
										}
									]
								},
								{
									xtype: 'natfieldset',
									defaults: {
										anchor: '100%'
									},
									items: [
										{
											xtype: 'textfield',
											fieldLabel: 'Server',
											propertyPath: 'server',
											itemId: 'txtServer'
										},
										{
											xtype: 'textfield',
											fieldLabel: 'Port',
											propertyPath: 'port',
											itemId: 'intPort'
										},
										{
											xtype: 'textfield',
											fieldLabel: 'Username',
											propertyPath: 'username',
											itemId: 'txtUsername'
										},
										{
											xtype: 'textfield',
											fieldLabel: 'Password',
											propertyPath: 'password',
											itemId: 'txtPassword'
										},
										{
											xtype: 'textfield',
											fieldLabel: 'Database',
											propertyPath: 'database',
											itemId: 'txtDatabase'
										}
									]
								}
							]
						},
						{
							xtype: 'component',
							margins: '5 0 5 0',
							html: 'You can register one for free at any of the next hosting providers:'
						},
						{
							xtype: 'component',
							margins: '5 0 5 0',
							html: '<a href="http://mongolab.com" target="_blank"><img src="https://extsolutions.herokuapp.com/graphics/logo/logo_mongolab.png"></a> <a href="http://mongohq.com" target="_blank"><img src="https://extsolutions.herokuapp.com/graphics/logo/logo_mongohq.png"></a>'
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
							text: 'Test',
							itemId: 'btnTest'
						},
						{
							xtype: 'natbutton',
							text: 'Previous',
							itemId: 'btnPrevious'
						},
						{
							xtype: 'natbutton',
							ui: 'green',
							text: 'Next',
							itemId: 'btnNext'
						},
						{
							xtype: 'natbutton',
							ui: 'green',
							text: 'Save',
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
