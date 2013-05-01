Ext.define('natcreator.view.HelpForm', { 
	extend: 'NAT.form.Panel',
	alias: 'widget.HelpForm',
	
	layout: {
		type: 'vbox'		
	},
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
		});
		me.callParent(arguments);
	}
});
