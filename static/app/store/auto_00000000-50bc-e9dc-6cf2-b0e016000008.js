Ext.define('natcreator.store.auto_00000000-50bc-e9dc-6cf2-b0e016000008', { 
	extend: 'NAT.data.Store',
	
	constructor: function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			autoLoad: true,			
			collection: 'auto_00000000-50bc-e9dc-6cf2-b0e016000008'			
		}, cfg)]);
	}
});
