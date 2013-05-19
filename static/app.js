var viewport = null;

Ext.Loader.setConfig({
	enabled: true,
	paths: { natcreator: 'app' }
});

Ext.create('natcreator.ClientModelRequires').Download();

//for sencha builder
Ext.require([
	'natcreator.view.Viewport'
]);

Ext.application({
	name: 'natcreator',
	stores: [
	],
	launch: function() {
		viewport = Ext.create('widget.Viewport');
		viewport.show();
	}
});
