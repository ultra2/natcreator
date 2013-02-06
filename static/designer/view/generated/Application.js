Ext.define('designer.view.generated.Application', { 
	extend: 'NAT.app.Application',
	alias: 'widget.',
	
	name: 'designer',
	gen_app: function(classes, file, errors)
	{	
		file.set('name', null);	
	},
	gen_server: function(classes, file, errors)
	{	
		file.set('name', null);	
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
		});
		me.callParent(arguments);
	}
});
